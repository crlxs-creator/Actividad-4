const Album = require('../models/Album');

//Crear Album
exports.crearAlbum = async (req, res) => {
    if (!req.body.titulo) {
    return res.status(400).json({ mensaje: "Faltan datos obligatorios" });
}
    try{
        const album = new Album(req.body);
        await album.save();
        res.status(201).json(album);
    }catch (error){
        res.status(400).json({ mensaje: error.message});
    }
    
};

//Obtener todos los Albums
exports.obtenerAlbums = async (req, res) => {
    try{
        const albums = await Album.find();
        res.json(albums);
    } catch (error){
        res.status(500).json( { mensaje: error.message });
    }
};

//Obtener Album por ID
exports.obtenerAlbumPorId = async (req, res) => {
    try{
        const album = await Album.findById(req.params.id);

        if (!album) {
            return res.status(404).json({ mensaje: "Album no encontrado" });
        }
        res.json(album);
    }catch (error){
        res.status(500).json({ mensaje: error.message });
    }
};
