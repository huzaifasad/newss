const mongoose = require('mongoose');

const laptopSchema = mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  productQuantity: Number,
  ramSize: Number,
  type: String,
  brand:String,
  // images: [Buffer],
  images: [{
    data: Buffer,
    contentType: String,
  }],
  features: [{
    name: String
    }],
});

const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;
