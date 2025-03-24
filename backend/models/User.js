const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true 
    },
    lastName: {
        type: String,
        required: true,
        trim: true 
    },
    email: {
        type: String,
        required: true,
        unique: true,  
        lowercase: true,  
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'] 
    },
    password: {
        type: String,
        required: true,
        minlength: 6  
    },
    balance: {
        type: Number,
        required: false,
        default: 500
    }
}, { timestamps: true });  

userSchema.pre('save', async function(next) {
    const user = this; 

    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        
        user.password = await bcrypt.hash(user.password, salt);
        
        next();  
    } catch (err) {
        next(err);  
    }
});
const User = mongoose.model('User', userSchema);

module.exports = User;
