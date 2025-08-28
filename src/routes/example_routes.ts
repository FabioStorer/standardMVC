import { Router } from "express";
import { ExampleController } from '../controllers/example_controllers';

export const exampleRoutes: Router = Router();

const exampleController = new ExampleController();

exampleRoutes.get('/hello-world', exampleController.helloWorld);
exampleRoutes.get('/error-test', exampleController.testError);