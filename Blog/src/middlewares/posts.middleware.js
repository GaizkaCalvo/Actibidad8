const PostModel  = require('../models/posts.model');
const AutorModel = require('../models/autores.model');

const checkPostId = async (req, res, next) =>
{
    const { postId } = req.params;

    if(isNaN(postId))
    {
        return res.status(400).json({ message: 'El id del post debe ser un numero' });
    }
    
    const post = await PostModel.getPostById(postId);
    if(!post)
    {
        return res.status(404).json({ message: 'El post no existe' });
    }

    req.post = post;

    next();
}

//TODO: Poner middleware para checkear que el autor existe, y que no de error la base de datos
const checkPostAutorId = async (req,res,next) =>
{
    const { autores_idautores } = req.body;

    if(!autores_idautores)
    {
        return res.status(404).json({ message: 'Parametro del id de autor ausente' });
    }

    const autor = await AutorModel.getAutorById(autores_idautores);
    if(!autor)
    {
        return res.status(404).json({ message: 'El Id de autor que intenta crear el post no existe' });
    }

    next();
}

module.exports = { checkPostId, checkPostAutorId };