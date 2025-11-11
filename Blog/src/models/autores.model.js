const db = require('../config/db');

const selectAutores = async () =>
{
    //destructuring -> guarda la primera posicion del array de la derecha
    const [result] = await db.query('SELECT * FROM autores');
    return result;
}

const insertAutores = async ({ nombre, email, imagen}) =>
{
    const [result] = await db.query(
        'INSERT INTO autores (nombre, email, imagen) VALUES (?,?,?)', 
        [nombre, email, imagen]);
    return result;
}

const getAutorById = async (autorId) =>
{
    const [result] = await db.query('SELECT * FROM autores WHERE idautores = ?', [autorId]);
    if(result.length == 0)
    {
        return null;
    }
    return result[0];
}

module.exports = { selectAutores, insertAutores, getAutorById };