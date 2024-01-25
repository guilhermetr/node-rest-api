import { Router } from 'express'

import { getProduct, getProducts, getProductsCount, postProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

router.get('/products', getProducts);
router.get('/products/count', getProductsCount);
router.get('/products/:id', getProduct);
router.post('/products', postProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
