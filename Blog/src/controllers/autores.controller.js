const AutorModel = require('../models/autores.model');

const getAll = async (req, res) => 
{
    const autores = await AutorModel.selectAutores();
    res.json(autores);   
}

const create = async (req, res) =>
{
    const result = await AutorModel.insertAutores(req.body);
    res.json(result);
}

module.exports = { getAll, create }
