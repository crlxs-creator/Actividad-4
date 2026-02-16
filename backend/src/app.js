const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

const albumRoutes = require('./routes/albumRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/albums', albumRoutes);
app.use('/api/auth', authRoutes);

// Servir frontend
app.use(express.static(path.join(__dirname, '../../frontend')));

module.exports = app;
