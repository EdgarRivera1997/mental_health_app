import Post from './model.js';

export const createPost = async (req, res) => {
    const { title, body } = req.body;
    const newPost = new Post({ title, body })

    try {
        return res.status(201).json({ post: await newPost.save() });
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Error with Post'})
    }
}