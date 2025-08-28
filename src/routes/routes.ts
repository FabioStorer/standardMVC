import { Router } from "express";
import { exampleRoutes } from "./example_routes";

export const routes: Router = Router();

routes.use(exampleRoutes);