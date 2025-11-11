const db = require('../config/db');

const selectAutores = async () =>
{
    //destructuring -> guarda la primera posicion del array de la derecha
    const [result] = await db.query('select * from autores');
    return result;
}

const insertAutores = async ({ nombre, email, imagen}) =>
{
    const [result] = await db.query(
        'insert into autores (nombre, email, imagen) values (?,?,?)', 
        [nombre, email, imagen]);
    return result;
}

module.exports = { selectAutores, insertAutores };