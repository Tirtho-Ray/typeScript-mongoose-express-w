import { ProductModel } from '../Models/Product';
import { Product } from '../interface/interface';

// Create a new product
const createProduct = async (data: Product) => {
  const result = await ProductModel.create(data);
  return result;
};

// Retrieve all products
const getProducts = async () => {
  const result = await ProductModel.find();
  return result;
};

const getProductById = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

// Update product information
const updateProduct = async (productId: string, data: Partial<Product>) => {
  const result = await ProductModel.findByIdAndUpdate(productId, data, {
    new: true,
  });
  return result;
};

// Delete a product
const deleteProduct = async (productId: string) => {
  await ProductModel.findByIdAndDelete(productId);
  return null;
};

// Search products by term
// const searchProducts = async (searchTerm: string) => {
//   const regex = new RegExp(searchTerm, 'i');
//   const result = await ProductModel.find({
//     $or: [
//       { name: regex },
//       { description: regex },
//       { category: regex },
//       { tags: { $in: [regex] } },
//     ],
//   });
//   return result;
// };

const searchProducts = async (searchTerm: string) => {
    if (searchTerm) {
      const regex = new RegExp(searchTerm, 'i'); // Case-insensitive partial match
      return await ProductModel.find({
        $or: [
          { name: regex },
          { description: regex },
          { category: regex },
          { tags: { $in: [regex] } },
        ],
      });
    } else {
      return await ProductModel.find({});
    }
  };
  
  

export const productServices = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
