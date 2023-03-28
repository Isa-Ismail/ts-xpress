import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();

dotenv.config();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

app.use(cors({
    credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

  app.get('/', (_req: Request, res: Response) => {
    return res.send('❤️😘🤣🤣🤣🍟🍔')
  })

  app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
  })

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});