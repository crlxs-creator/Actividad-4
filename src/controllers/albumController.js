const mongoose = require('mongoose');
const Album = require('../models/Album');

// Crear Album
exports.crearAlbum = async (req, res) => {
    try {
        if (!req.body.tittle || !req.body.artist) {
            return res.status(400).json({ mensaje: "Faltan datos obligatorios" });
        }

        const album = new Album(req.body);
        await album.save();

        res.status(201).json(album);

    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Obtener todos los Albums
exports.obtenerAlbums = async (req, res) => {
    try {
        const filtros = {};

        if (req.query.genre) filtros.genre = req.query.genre;
        if (req.query.artist) filtros.artist = req.query.artist;
        if (req.query.year) filtros.year = req.query.year;

        const sort = req.query.sort || "createdAt";

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const total = await Album.countDocuments(filtros);

        const albums = await Album.find(filtros)
            .sort(sort)
            .skip(skip)
            .limit(limit);

        res.json({
            total,
            page,
            totalPages: Math.ceil(total / limit),
            albums
        });

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener Album por ID
exports.obtenerAlbumPorId = async (req, res) => {
    try {

        // Validar formato del ID
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ mensaje: "ID invalido" });
        }

        const album = await Album.findById(req.params.id);

        if (!album) {
            return res.status(404).json({ mensaje: "Album no encontrado" });
        }

        res.json(album);

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Actualizar Album
exports.actualizarAlbum = async (req, res) => {
    try {

        // Validar formato del ID
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ mensaje: "ID invalido" });
        }

        const album = await Album.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!album) {
            return res.status(404).json({ mensaje: "Album no encontrado" });
        }

        res.json(album);

    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar Album
exports.eliminarAlbum = async (req, res) => {
    try {

        // Validar formato del ID
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ mensaje: "ID invalido" });
        }

        const album = await Album.findByIdAndDelete(req.params.id);

        if (!album) {
            return res.status(404).json({ mensaje: "Album no encontrado" });
        }

        res.json({ mensaje: "Album eliminado correctamente" });

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
