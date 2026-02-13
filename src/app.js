const express = require('express');
const app = express();

app.use(express.json());

const albumRoutes = require('./routes/albumRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/albums', albumRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
