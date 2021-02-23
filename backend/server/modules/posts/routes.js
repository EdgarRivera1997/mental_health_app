import { Router } from 'express';
import * as PostController from './controller.js';

const routes = new Router();

routes.post('/posts', PostController.createPost);
routes.get('/posts', PostController.getAllPosts);

export default routes;