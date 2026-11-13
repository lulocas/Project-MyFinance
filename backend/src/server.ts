import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import accountRoutes from './routes/account.routes.js';

const app: Express = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use('/accounts', accountRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
