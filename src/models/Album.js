const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    tittle: {
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
        required: true
    }
},  { 
    timestamps: true 
});

module.exports = mongoose.model('Album', albumSchema);