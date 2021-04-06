import { Router } from 'express';
import Comment from "./model.js";
import Post from '../posts/model.js';
import User from '../users/model.js';

const routes = new Router();

routes.post('/post/:id/createComment', async (req, res) => {
    if(req.user){

        const postId = await Post.findById(req.params.id);
        const user = await User.findOne(req.user);

        const newComment = new Comment({
            text: req.body.text,
            postIn: postId,
            postedBy: user,
        });

        return res.status(200).json(await newComment.save());
        // return res.status(200).json({ comment : await newComment.save().then(result => {
        //     Comment.populate(newComment, { path: 'Post'}).then(comment => {
        //         res.json({message: 'Comment added', comment})
        //         });
        //     })
        // });

    } else {
        return res.status(404).json({ error: true, message: 'Error with Comment'})
    }
});

routes.get('/post/:id/comments', async (req, res) => {

    const postId = await Post.findById(req.params.id);

    try {
        return res.status(200).json(await Comment.findOne({postId}));
    } catch {
        return res.status(404).json({ error: true, message: 'Error with Comment'})
    }
});

export default routes;