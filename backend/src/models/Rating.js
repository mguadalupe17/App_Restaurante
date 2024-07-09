const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  mesero: String,
  calificacion: Number,
  comentario: String
});

module.exports = mongoose.model('Rating', ratingSchema);
