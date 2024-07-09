const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/orders
router.post('/', async (req, res) => {
  console.log(req.body); // Verificar los datos recibidos

  const order = new Order({
    id: req.body.id,
    platos: req.body.platos,
    total: req.body.total
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
