import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './routes/productRoutes';
import { orderRouter } from './routes/orderRoutes';
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!oo');
});

export default app;
