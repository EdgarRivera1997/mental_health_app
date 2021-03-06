import { Router } from 'express';
import Comment from "./model.js";
import Post from '../posts/model.js';

const routes = new Router();

routes.post('/post/:id/createComment', async (req, res) => {
    if(req.user){
        const postId = Post.findOne(req.params._id);
        const newComment = new Comment({
            text: req.body.text,
            postIn: postId
        });

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

export default routes;