import { Request, Response } from 'express';
import { orderServices } from '../services/orderServices';
import { validateOrder } from '../utils/validateOrder';

const createOrder = async (req: Request, res: Response) => {
  const { error } = validateOrder(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const orderData = req.body;
    const result = await orderServices.createOrder(orderData);
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrders();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders',
      error: err,
    });
  }
};

// const getOrdersByEmail = async (req: Request, res: Response) => {
//   try {
//     const { email } = req.query;
//     const result = await orderServices.getOrdersByEmail(email as string);
//     res.status(200).json({
//       success: true,
//       message: `Orders fetched successfully for user email!`,
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: 'Failed to fetch orders',
//       error: err.message,
//     });
//   }
// };
const getOrdersByEmail = async (req: Request, res: Response) => {
    try {
      const email = Array.isArray(req.query.email) ? req.query.email[0] : req.query.email;
  
      if (typeof email !== 'string') {
        return res.status(400).json({
          success: false,
          message: 'Email query parameter is required and must be a string',
        });
      }
  
      const result = await orderServices.getOrdersByEmail(email);
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user email!`,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch orders',
        error: err,
      });
    }
  };
  

// const getOrdersByEmail = async (req: Request, res: Response) => {
//     try {
//       const { email } = req.query;
  
//       // Ensure email is properly trimmed if it exists
//       const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  
//       // Query orders by email
//       const result = await orderServices.getOrdersByEmail(trimmedEmail);
//       res.status(200).json({
//         success: true,
//         message: `Orders fetched successfully for email: ${trimmedEmail}`,
//         data: result,
//       });
//     } catch (err: any) {
//       res.status(500).json({
//         success: false,
//         message: 'Failed to fetch orders',
//         error: err.message,
//       });
//     }
//   };
  
export const orderController = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
