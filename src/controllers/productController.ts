import { Request, Response } from 'express';
import { productServices } from '../services/services';

// Create a new product
// let variable: any;

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await productServices.createProduct(productData);
    res.status(201).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err:unknown) {
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: String(err),
    });
    res.send(err);
  }
};

// Retrieve all products
const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getProducts();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: String(err),
    });
    res.send(err);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    try {
      const { productId } = req.params;
      const product = await productServices.getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error: unknown) {
      res
        .status(500)
        .json({ message: 'Internal server error' });
    }
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: String(err),
    });
    res.send(err);
  }
};
// Update product information
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const result = await productServices.updateProduct(productId, productData);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: String(err),
    });
    res.send(err);
  }
};

// Delete a product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await productServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: String(err),
    });
    res.send(err);
  }
};

// Search products by term
const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.searchProducts(searchTerm as string);
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to search products',
      error: err,
    });
    res.send(err);
  }
};


export const productController = {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  searchProducts,
};
