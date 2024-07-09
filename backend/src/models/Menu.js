const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
});

module.exports = mongoose.model('Menu', menuSchema);
