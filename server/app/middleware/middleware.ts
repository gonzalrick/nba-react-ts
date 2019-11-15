import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import express from 'express';
import morgan from 'morgan';

const whiteList = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:4000',
  'http://localhost:8080',
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const isWhitelisted = whiteList.includes(origin!);
    callback(null, isWhitelisted);
  },
  credentials: true,
};

export default (app: express.Application): void => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors(corsOptions));
};
