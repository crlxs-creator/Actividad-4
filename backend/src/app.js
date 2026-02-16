const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

const albumRoutes = require('./routes/albumRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/albums', albumRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '../../frontend')));


app.get('*', (req, res) => {
  if (!req.originalUrl.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
  } else {
    res.status(404).json({ message: 'API route not found' });
  }
});

module.exports = app;
