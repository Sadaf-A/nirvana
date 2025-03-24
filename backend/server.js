const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const multer = require('multer');
const { uploadFile } = require('./gcp/imageUploadService');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const app = express();
app.use(cors());

const mongoose = require('mongoose');
const User = require('./models/User');
const Item = require('./models/Item');

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully!");
        
        app.use(express.json()); 

        function authMiddleware(req, res, next) {
            const token = req.headers['authorization']?.split(' ')[1];  
            
            if (!token) {
                return res.status(403).json({ error: 'No token provided' });
            }
        
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ error: 'Invalid or expired token' });
                }
                req.userId = decoded.userId;  
                next();
            });
        }

        app.get('/', (req, res) => {
            res.send("Hello world");
        });

        app.post('/signup', async (req, res) => {
            try {
                const { firstName, lastName, email, password } = req.body;

                const newUser = new User({
                    firstName, 
                    lastName, 
                    email, 
                    password});

                await newUser.save();
                res.status(201).json({ message: 'User Registered Successfully'});
            } catch (err) {
                console.error('Error registering user:', err);
                res.status(500).json({ error: 'Server error' });
             }
        })

        app.post('/login', async (req, res) => {
            try {
                const { email, password } = req.body;
                const user = await User.findOne({ email });
                console.log("hit");
                if (!user) {
                    return res.status(400).json({ error: 'Invalid credentials' });
                }
        
                const isMatch = await bcrypt.compare(password, user.password);
                console.log("hit");
                if (!isMatch) {
                    return res.status(400).json({ error: 'Invalid credentials' });
                }
                console.log("hit");
                const token = jwt.sign(
                    { userId: user._id, email: user.email },
                    process.env.JWT_SECRET, 
                    { expiresIn: '1h' } 
                );
                console.log("hit");
                res.status(200).json({
                    message: 'Login successful',
                    token  
                });
                console.log("hit");
            } catch (err) {
                console.error('Error logging in user:', err);
                res.status(500).json({ error: 'Server error' });
            }
        });

        app.get("/user", authMiddleware, async (req, res) => {
            try {
              const user = await User.findById(req.userId).select("-password");
              if (!user) return res.status(404).json({ message: "User not found" });
          
              res.json(user);
            } catch (error) {
              res.status(500).json({ message: "Server error" });
            }
        });

        app.get('/list-items', async (req, res) => {
            try {
                let { page = 1, limit = 10, category, search } = req.query;
        
                page = parseInt(page);
                limit = parseInt(limit);
        
                const filter = {};
        
                if (category) {
                    filter.category = category;
                }
        
                if (search) {
                    filter.title = { $regex: search, $options: 'i' }; 
                }
        
                const items = await Item.find(filter)
                    .populate('sellerId', 'firstName lastName email')
                    .skip((page - 1) * limit)
                    .limit(limit);
        
                const totalItems = await Item.countDocuments(filter);
        
                res.status(200).json({
                    totalPages: Math.ceil(totalItems / limit),
                    currentPage: page,
                    items
                });
            } catch (err) {
                console.error('Error fetching items:', err);
                res.status(500).json({ error: 'Server error' });
            }
        });

        app.get('/selling-list', authMiddleware, async (req, res) => {
            try {
                const { userId } = req;                
                const items = await Item.find({ sellerId: userId }).populate('sellerId', 'firstName lastName email');  
        
                if (items.length === 0) {
                    return res.status(404).json({ message: 'No items found for this seller' });
                }
        
                res.status(200).json(items);
            } catch (err) {
                console.error('Error fetching selling items:', err);
                res.status(500).json({ error: 'Server error' });
            }
        });

        app.delete('/selling-list/:id', authMiddleware, async (req, res) => {
            try {
                const { id } = req.params;
                const { userId } = req;
        
                const item = await Item.findOne({ _id: id, sellerId: userId });
                if (!item) {
                    return res.status(404).json({ message: 'Item not found or not authorized to delete' });
                }
        
                await Item.findByIdAndDelete(id);
                res.status(200).json({ message: 'Item deleted successfully' });
            } catch (err) {
                console.error('Error deleting item:', err);
                res.status(500).json({ error: 'Server error' });
            }
        });        

        app.post('/sell-item', authMiddleware, upload.array('images', 5), async (req, res) => {
            try {
              const { title, price, category } = req.body;
              const files = req.files;
          
              if (!files || files.length === 0) {
                return res.status(400).send('No image files uploaded.');
              }
          
              const imageUrls = [];
              for (const file of files) {
                const { buffer, originalname, mimetype } = file;
          
                const uploadedImageUrl = await uploadFile(buffer, originalname, mimetype);
                imageUrls.push(uploadedImageUrl);
              }
          
              const newItem = new Item({
                title,
                price,
                category,
                imageUrls,
                sellerId: req.userId, 
              });
          
              await newItem.save();
          
              res.status(201).json({ message: 'Item added successfully', item: newItem });
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Server error' });
            }
          });
        
          app.post('/buy-item/:itemId', authMiddleware, async (req, res) => {
            try {
                const buyerId = req.userId;  
                const { itemId } = req.params; 
                
                const item = await Item.findById(itemId).populate('sellerId', 'balance');
                if (!item) {
                    return res.status(404).json({ message: 'Item not found' });
                }
        
                const buyer = await User.findById(buyerId);
                if (!buyer) {
                    return res.status(404).json({ message: 'Buyer not found' });
                }
        
                if (buyer.balance < item.price) {
                    return res.status(400).json({ message: 'Insufficient balance' });
                }
        
                buyer.balance -= item.price;
                await buyer.save();
        
                const seller = item.sellerId;
                seller.balance += item.price;
                await seller.save();
        
                await Item.findByIdAndDelete(itemId);
        
                res.status(200).json({
                    message: 'Item purchased and removed successfully',
                    buyer: buyerId,
                    seller: seller._id
                });
        
            } catch (error) {
                console.error('Error during purchase:', error);
                res.status(500).json({ message: 'Server error' });
            }
        });
        
        
        app.listen(3000, () => {
            console.log("Server listening on port 5000");
        });

    } catch (err) {
        console.log("Error connecting to MongoDB:", err);
    }
}

main();