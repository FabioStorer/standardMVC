import express, { Express, Request, Response, NextFunction } from 'express';
import { routes } from './routes/routes';
import cors from 'cors';
import { log } from './middlewares/log.middleware';
import { errorHandling } from './middlewares/error-handling.middleware';
import { cid } from './middlewares/cid.middleware';

const app: Express = express();

app.use(cid);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(log);

app.use(errorHandling);

export { app };