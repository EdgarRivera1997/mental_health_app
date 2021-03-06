import { Router } from 'express';
//import * as PostController from './controller.js';
import Post from './model.js';
import User from '../users/model.js';

const routes = new Router();

// routes.post('/createPost', PostController.createPost);
// routes.get('/posts', PostController.getAllPosts);

routes.post('/createPost', async (req, res) => {
    if(req.user) {
        const { title, body } = req.body;
        const newPost = new Post({
            title,
            body,
        });

        return res.status(200).json({ post : await newPost.save()});

    } else {
        return res.status(404).json({ error: true, message: 'Error with Post'})
    }
});

routes.get('/posts', async (req, res) => {
    try {
        //return Post.find({}).populate('comments').exec();
        return res.status(200).json({ post : await Post.find({} )});
    } catch {
        return res.status(404).json({ error: true, message: 'Error with Post'});
    }
});

routes.get('/posts/:id', async (req,res) => {
    try{
        //return Post.findById(req.params.id).populate('comments').exec();
    } catch {
        return res.status(404).json({ error: true, message: 'Error with Post'});
    }
});

export default routes;