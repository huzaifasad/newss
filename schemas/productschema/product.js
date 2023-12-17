
const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  title: String,
  description: String,
  brand: String,
  category: String,
  price: Number,
  images:Buffer,
  // Add a reference to the user who added the product

}, {
  collection: 'products',
});

module.exports = mongoose.model('products', productsSchema);