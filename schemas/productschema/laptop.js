import mongoose from 'mongoose';

const laptopSchema = mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  productQuantity: Number,
  ramSize: Number,
  type: String,
  brand: String,
  images: [{
    data: Buffer,
    contentType: String,
  }],
  features: [{
    name: String
  }],
});

const Laptop = mongoose.model('Laptop', laptopSchema);

export default Laptop;
