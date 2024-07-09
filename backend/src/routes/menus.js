const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// GET /api/menus
router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/menus
router.post('/', async (req, res) => {
  const menu = new Menu({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio
  });

  try {
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
