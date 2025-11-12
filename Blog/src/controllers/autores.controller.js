const AutorModel = require('../models/autores.model');

const getAll = async (req, res) => 
{
    const autores = await AutorModel.selectAutores();
    res.json(autores);   
}

const create = async (req, res) =>
{
    const { insertId } = await AutorModel.insertAutores(req.body);

    const newAutor =  await AutorModel.getAutorById(insertId);

    res.json(newAutor);
}

const getById = async (req, res) =>
{
    res.json(req.autor);
}

const getAutorPostsById = async (req, res) =>
{
    const posts = await AutorModel.getAutorPostsById(req.autor.idautores);

    res.json(posts);
}

module.exports = { getAll, create, getById, getAutorPostsById }
