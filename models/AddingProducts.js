import mongoose from "mongoose";

const AddingProductStructure = mongoose.Schema({
  ProductId: Number,
  ProductName: String,
  ProductDescription: String,
  ProductCategory: ['Jackets', 'Training', 'Casual'],
  ProductPrice: Number,
  ProductImage: String,
});

const AddingProductModel = mongoose.model('AddingProduct', AddingProductStructure);

export default AddingProductModel;
