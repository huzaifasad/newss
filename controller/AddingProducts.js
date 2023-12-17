// Import the model
import AddingProductModel from "../models/AddingProducts.js";

export const getProducts = async (req, res) => {
  try {
    const AddingProduct = await AddingProductModel.find();
    res.json(AddingProduct);
  } catch (error) {
    console.log("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createProducts = async (req, res) => {
  const {
    ProductId,
    ProductName,
    ProductDescription,
    ProductCategory,
    ProductPrice,
    ProductImage,
  } = req.body;

  const newProduct = new AddingProductModel({
    ProductId,
    ProductName,
    ProductDescription,
    ProductCategory,
    ProductPrice,
    ProductImage,
  });

  try {
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteProduct = async (req, res) => {
    const productId = req.params.productId;
    try {
      const deletedProduct = await AddingProductModel.findOneAndDelete({ ProductId: productId });
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(deletedProduct);
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  export const updateProduct = async (req, res) => {
    const productId = req.params.productId;
    const updatedProductData = req.body;
    try {
      const updatedProduct = await AddingProductModel.findOneAndUpdate({ ProductId: productId }, updatedProductData, {
        new: true,
      });
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const getProductById = async (req, res) => {
    const productId = req.params.productId;
  
    try {
      const product = await AddingProductModel.findOne({ ProductId: productId });
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(product);
    } catch (error) {
      console.error('Error getting product details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };