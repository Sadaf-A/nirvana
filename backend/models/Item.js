const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true 
    },
    price: {
        type: Number,
        required: false,
        default: 750 
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'User',  
        required: true  
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'User',  
        required: false
    },
    category: {
        type: String,
        enum: ['home-decor', 'furniture', 'accessories', 'other'],
        required: true
    },
    imageUrls: {
        type: [String]
    },
}, { timestamps: true });  

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
