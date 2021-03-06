import Post from './model.js';
import User from '../users/model.js';

export const createPost = async (req, res) => {
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
}

export const getAllPosts = async (req, res) => {
    try {
        //return Post.find({postedBy: req.user._id}).populate('postedBy').exec();
        return res.status(200).json({ post : await Post.find({} )});
    } catch {
        return res.status(404).json({ error: true, message: 'Error with Post'});
    }
}