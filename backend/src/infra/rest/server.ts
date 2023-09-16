import express from 'express';
import cors from 'cors';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "optionsSuccessStatus": 200,
}));
server.use(router);

export { server };