import express from 'express';
import {
  createProducts,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controller/AddingProducts.js';

const router = express.Router();

router.get("/dashboard/addproduct", getProducts);
router.post("/dashboard/addproduct", createProducts);
router.delete('/dashboard/deleteproduct/:productId', deleteProduct);
router.put('/dashboard/updateproduct/:productId', updateProduct);
router.get('/dashboard/getproduct/:productId', getProductById);

export default router;
