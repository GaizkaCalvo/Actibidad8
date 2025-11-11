const { post } = require('../app');
const PostModel = require('../models/posts.model');

const getAll = async (req, res) => 
{
    const posts = await PostModel.selectPosts();
    res.json(posts);
}

const create = async (req, res) =>
{
    const { insertId } = await PostModel.insertPosts(req.body);
    
    const newPost =  await PostModel.getPostById(insertId);

    res.json(newPost);
}

const getById = async (req, res) =>
{
    const { postId } = req.params;
    const post = await PostModel.getPostById(postId);

    if(!post)
    {
        return res.status(404).json({ message: 'El post no existe' });
    }
    res.json(post);
}

module.exports = { getAll, create, getById }
