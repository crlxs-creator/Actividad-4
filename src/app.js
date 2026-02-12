const express = require('express');
const app = express();

app.use(express.json());

const albumRoutes = require('./routes/albumRoutes');
app.use('/api/albums', albumRoutes);

module.exports = app; 