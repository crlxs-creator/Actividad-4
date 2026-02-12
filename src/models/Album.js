const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    titulo: {
        type: String, 
        required: true
    },
    artista: {
        type: String, 
        required: true
    },
    genero: {
        type: String, 
        required: true
    },
    anio: {
        type: Number, 
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number, 
        required: true
    }
},  { timestamps: true });

module.exports = mongoose.model('Album', albumSchema);