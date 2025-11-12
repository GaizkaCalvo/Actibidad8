const AutorModel = require('../models/autores.model');

const checkAutoresId = async (req, res, next) =>
{
    const { autorId } = req.params;

    if(isNaN(autorId))
    {
        return res.status(400).json({ message: 'El id del autor debe ser un numero' });
    }
    
    const autor = await AutorModel.getAutorById(autorId);
    if(!autor)
    {
        return res.status(404).json({ message: 'El autor no existe' });
    }

    req.autor = autor;

    next();
}

module.exports = { checkAutoresId };