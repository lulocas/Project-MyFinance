import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

const app: Express = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use((req: Request, res: Response, next) => {
  res.status(404).send('Not Found');
});