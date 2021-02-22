import { Router } from 'express';
import * as PostController from './controller.js';

const routes = new Router();

routes.post('/posts', PostController.createPost);

export default routes;