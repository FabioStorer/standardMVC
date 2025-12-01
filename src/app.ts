import express, { Express, Request, Response, NextFunction } from 'express';
import { routes } from './routes/routes';
import cors from 'cors';
import { log } from './middlewares/log.middleware';
import { errorHandling } from './middlewares/error-handling.middleware';
import { cid } from './middlewares/cid.middleware';
import swagger from 'swagger-ui-express';
import * as swaggerDocument from './docs/swagger.json'

const app: Express = express();

app.use(cid);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(log);

app.get('/swagger.json', (req, res) => {
    res.send(swaggerDocument)
});

app.get('/health', (req, res) => {
    res.status(200).send('API está funcionando!')
});

app.use('/api-docs', swagger.serve, swagger.setup(null, {
    swaggerOptions: {
        url: '/swagger.json'
    }
}))

app.use(errorHandling);

export { app };