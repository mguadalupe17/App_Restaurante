const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  platos: [
    {
      nombre: { type: String, required: true },
      cantidad: { type: Number, required: true },
      precio: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
