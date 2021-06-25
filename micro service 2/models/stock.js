const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    productName: {
        type: String,
        unique: true,
        required: true,
    },

    quantity: {
        type: Number,
        min: 0,
        required: true        
    },

    price: {
        type: Number,
        min: 0,
        required: true        
    },

    description: {
        type: String,
        required: true
    },

    location: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Stock' , stockSchema);