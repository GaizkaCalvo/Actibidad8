const db = require('../config/db');

const selectPosts = async () =>
{
    //destructuring -> guarda la primera posicion del array de la derecha
    const [result] = await db.query('select * from posts');
    return result;
}

const insertPosts = async ({ titulo, descripcion, creacion, categoria }) =>
{
    const [result] = await db.query(
        'insert into posts (titulo, descripcion, creacion, categoria) values (?,?,?)', 
        [titulo, descripcion, creacion, categoria]);
    return result;
}

module.exports = { selectPosts, insertPosts };