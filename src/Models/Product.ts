// import { Schema, model } from "mongoose";
// import { Inventory, Product, Variant } from "../interface/interface";
// import Joi from '@hapi/joi';

// // Define Joy schema for Variant
// const variantSchema = Joi.object({
//     type: Joi.string().required(),
//     value: Joi.string().required()
// });

// // Define Joy schema for Inventory
// const inventorySchema = Joi.object({
//     quantity: Joi.number().required().positive(),
//     inStock: Joi.boolean().required()
// });

// // Define Joy schema for Product
// const productSchema = Joi.object({
//     name: Joi.string().required(),
//     description: Joi.string().required(),
//     price: Joi.number().required().positive(),
//     category: Joi.string().required(),
//     tags: Joi.array().items(Joi.string().required()).required(),
//     variants: Joi.array().items(variantSchema).required(),
//     inventory: inventorySchema.required()
// });

// // Create Mongoose schemas
// const VariantMongooseSchema = new Schema<Variant>({
//     type: {
//         type: String,
//         required: true
//     },
//     value: {
//         type: String,
//         required: true
//     }
// });

// const InventoryMongooseSchema = new Schema<Inventory>({
//     quantity: {
//         type: Number,
//         required: true
//     },
//     inStock: {
//         type: Boolean,
//         required: true
//     }
// });

// const ProductMongooseSchema = new Schema<Product>({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     tags: {
//         type: [String],
//         required: true
//     },
//     variants: {
//         type: [VariantMongooseSchema],
//         required: true
//     },
//     inventory: {
//         type: InventoryMongooseSchema,
//         required: true
//     }
// });

// // Compile Joy schema to a Mongoose model
// const ProductModel = model<Product>('Product', ProductMongooseSchema);

// export { ProductModel };
import { Schema, model } from 'mongoose';
import { Inventory, Product, Variant } from '../interface/interface';

// Define Joi schema for Variant
// const variantSchema = Joi.object({
//   type: Joi.string().required(),
//   value: Joi.string().required(),
// });

// // Define Joi schema for Inventory
// const inventorySchema = Joi.object({
//   quantity: Joi.number().required().positive(),
//   inStock: Joi.boolean().required(),
// });

// Define Joi schema for Product
// const productSchema = Joi.object({
//   name: Joi.string().required(),
//   description: Joi.string().required(),
//   price: Joi.number().required().positive(),
//   category: Joi.string().required(),
//   tags: Joi.array().items(Joi.string().required()).required(),
//   variants: Joi.array().items(variantSchema).required(),
//   inventory: inventorySchema.required(),
// });

// Create Mongoose schemas
const VariantMongooseSchema = new Schema<Variant>(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { _id: false },
); // Disable _id generation for variants

const InventoryMongooseSchema = new Schema<Inventory>(
  {
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false },
); // Disable _id generation for inventory

const ProductMongooseSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [VariantMongooseSchema],
    required: true,
  },
  inventory: {
    type: InventoryMongooseSchema,
    required: true,
  },
});

// Compile Joi schema to a Mongoose model
const ProductModel = model<Product>('Product', ProductMongooseSchema);

export { ProductModel };
