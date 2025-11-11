const { post } = require('../app');
const PostModel = require('../models/posts.model');

const getAll = async (req, res) => 
{
    const posts = await PostModel.selectPosts();
    res.json(posts);
}

const create = async (req, res) =>
{
   const result = await PostModel.insertAutores(req.body);
    res.json(result);
}

module.exports = { getAll, create }
