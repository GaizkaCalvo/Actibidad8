const db = require('../config/db');

const selectPosts = async () =>
{
    //destructuring -> guarda la primera posicion del array de la derecha
    const [result] = await db.query('SELECT * FROM posts');
    return result;
}

const insertPosts = async ({ autores_idautores ,titulo, descripcion, categoria }) =>
{
    const [result] = await db.query(
        'INSERT INTO posts (autores_idautores, titulo, descripcion, categoria) VALUES (?,?,?,?)', 
        [autores_idautores, titulo, descripcion, categoria]);
    return result;
}

const getPostById = async (postId) =>
{
    const [result] = await db.query('SELECT * FROM posts WHERE idpost = ?', [postId]);
    if(result.length == 0)
    {
        return null;
    }
    return result[0];
}


module.exports = { selectPosts, insertPosts, getPostById };