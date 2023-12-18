// Import mongoose library
import mongoose from 'mongoose';

// Define the laptop schema
const laptopSchema = new mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  productQuantity: Number,
  ramSize: Number,
  type: String,
  brand: String,
  images: [String], // Store multiple image URLs as strings
  features: [{
    name: String
  }],
});

// Define and export the Laptop model
export const Laptop = mongoose.model('Laptop', laptopSchema);
