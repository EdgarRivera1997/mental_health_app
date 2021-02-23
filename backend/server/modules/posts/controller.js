import Post from './model.js';

export const createPost = async (req, res) => {
    const { title, body } = req.body;
    const newPost = new Post({ title, body })

    try {
        return res.status(201).json({ post: await newPost.save() });
    } catch {
        return res.status(404).json({ error: true, message: 'Error with Post'})
    }
}

export const getAllPosts = async (req, res) => {
    try {
        return res.status(200).json({ post : await Post.find({} )});
    } catch {
        return res.status(404).json({ error: true, message: 'Error with Post'});
    }
}