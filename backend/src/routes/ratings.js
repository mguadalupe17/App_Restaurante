const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating');

// POST /api/formulario
router.post('/', async (req, res) => {
  const rating = new Rating({
    mesero: req.body.mesero,
    calificacion: req.body.calificacion,
    comentario: req.body.comentario
  });

  try {
    const newRating = await rating.save();
    res.status(201).json(newRating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
