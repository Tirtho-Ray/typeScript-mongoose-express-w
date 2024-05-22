import { Order, OrderModel } from '../Models/Order';
import { ProductModel } from '../Models/Product';

// const createOrder = async (orderData: Order) => {
//   const product = await ProductModel.findById(orderData.productId);
//   if (!product) {
//     throw new Error('Product not found');
//   }

//   if (product.inventory.quantity < orderData.quantity) {
//     throw new Error('Insufficient quantity available in inventory');
//   }

//   product.inventory.quantity -= orderData.quantity;
//   product.inventory.inStock = product.inventory.quantity > 0;
//   await product.save();

//   const order = new OrderModel(orderData);
//   const result = await order.save();
//   return result;
// };

// post data
const createOrder = async (orderData: Order) => {
  const product = await ProductModel.findById(orderData.productId);
  if (!product) {
    throw new Error('Product not found');
  }

  if (product.inventory.quantity < orderData.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  product.inventory.quantity -= orderData.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  const order = new OrderModel(orderData);
  const result = await order.save();
  return result;
};

// get data
const getAllOrders = async () => {
  return await OrderModel.find().populate('productId');
};

// find by email
const getOrdersByEmail = async (email: string) => {
  return await OrderModel.find({ email }).populate('productId');
};

export const orderServices = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
