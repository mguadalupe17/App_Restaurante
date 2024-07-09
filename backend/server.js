const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/talleres')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes
const menusRoute = require('./src/routes/menus');
const ordersRoute = require('./src/routes/orders');
const ratingsRoute = require('./src/routes/ratings');

app.use('/api/menus', menusRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/ratings', ratingsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
