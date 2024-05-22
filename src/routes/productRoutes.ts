import express from 'express';
import { productController } from '../controllers/productController';
const router = express.Router();

router.post('/', productController.createProduct);

// Retrieve all products
router.get('/', productController.getProducts);

// Retrieve a specific product by ID
router.get('/:productId', productController.getProductById);

// Update product information
router.put('/:productId', productController.updateProduct);

// Delete a product
router.delete('/:productId', productController.deleteProduct);

// Search for products
router.get('/api/products', productController.searchProducts);

export const productRouter = router;
