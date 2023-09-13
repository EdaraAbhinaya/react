import express from 'express';
import productController from '../controllers/productController';

const router = express.Router();
router.get('/', productController.getProducts.bind(productController));

export default router;
