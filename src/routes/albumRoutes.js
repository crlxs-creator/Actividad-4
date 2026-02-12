const express = require('express');
const router = express.Router();
const albumController = require ('../controllers/albumController');

router.post('/', albumController.crearAlbum);
router.get('/', albumController.obtenerAlbums);
router.get('/:id', albumController.obtenerAlbumPorId);

module.exports = router; 