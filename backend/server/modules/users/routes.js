import { Router } from 'express';
import * as UserController from './controller.js';

const routes = new Router();

routes.post('/signup', UserController.createUser);
routes.post('/signin', UserController.loginUser);
routes.get('/user', UserController.getUser);
routes.get('/allUsers', UserController.getAllUsers);

export default routes;