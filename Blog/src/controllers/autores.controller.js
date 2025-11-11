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
    const { autorId } = req.params;
    const autor = await AutorModel.getAutorById(autorId);

    if(!autor)
    {
        return res.status(404).json({ message: 'El autor no existe' });
    }
    res.json(autor);
}

module.exports = { getAll, create, getById }
