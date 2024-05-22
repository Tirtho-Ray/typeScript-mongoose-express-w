import { Schema, model, Document } from 'mongoose';

export interface Order extends Document {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

const OrderSchema = new Schema<Order>({
  email: { type: String, required: true },

  //productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },

  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const OrderModel = model<Order>('Order', OrderSchema);
