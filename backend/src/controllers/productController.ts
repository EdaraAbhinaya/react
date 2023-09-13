import { Request, Response } from 'express';
import productService from '../services/productService';

const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.fetchProducts();
        res.json(products);
    } catch (error) {
        console.error('Error in productController:', error);
        res.status(500).json({ message: 'error' });
    }
};

export default {
    getProducts,
};
