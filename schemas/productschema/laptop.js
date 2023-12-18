// schemas/productschema/Laptop.js

import mongoose from 'mongoose';

const laptopSchema = mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  productQuantity: Number,
  ramSize: Number,
  type: String,
  brand: String,
  images: [String],
  features: [
    {
      name: String,
    },
  ],
});

const Laptop = mongoose.model('Laptop', laptopSchema);

export { Laptop }; // Use named export
