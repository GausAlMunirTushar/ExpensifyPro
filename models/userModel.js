const mongoose = require('mongoose');
// Schema Design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required and should be unique'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, 
{versionKey: false},
{timestamps: true},
)

// Export userModel
const userModel = mongoose.model('user', userSchema)