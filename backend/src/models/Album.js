const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    artist: {
        type: String, 
        required: true
    },
    genre: {
        type: String, 
        required: true
    },
    year: {
        type: Number, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number, 
        default: 0
    }
},  { 
    timestamps: true 
});

module.exports = mongoose.model('Album', albumSchema);