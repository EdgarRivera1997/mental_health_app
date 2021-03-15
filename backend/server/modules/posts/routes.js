import { Router } from 'express';
import Post from './model.js';
import User from '../users/model.js';

const routes = new Router();

routes.post('/createPost', async (req, res) => {
    if(req.user) {

        const user = await User.findOne(req.user);

        const { body } = req.body;
        const newPost = new Post({
            body,
            postedBy: user,
        });

        return res.status(200).json({ post : await newPost.save()});

    } else {
        return res.status(404).json({ error: true, message: 'Error with Post'})
    }
});

routes.get('/posts', async (req, res) => {
    try {
        return res.status(200).json({ post : await Post.find({} )});
    } catch {
        return res.status(404).json({ error: true, message: 'Error with Post'});
    }
});

export default routes;