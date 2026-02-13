const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', albumController.obtenerAlbums);
router.get('/:id', albumController.obtenerAlbumPorId);

// PROTEGIDAS
router.post('/', authMiddleware, albumController.crearAlbum);
router.put('/:id', authMiddleware, albumController.actualizarAlbum);
router.delete('/:id', authMiddleware, albumController.eliminarAlbum);

module.exports = router;
