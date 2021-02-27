import { Router } from 'express';
import * as UserController from './controller.js';

const routes = new Router();

routes.post('/user', UserController.createUser);

export default routes;