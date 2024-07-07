import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;
dotenv.config();


// const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;

const usuario_db = process.env.DB_USER;
console.log('nuevo debugeo', usuario_db);

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'desafio_likeme',
    password: 'Dji3pro',
    allowExitOnIdle: true
};
// console.log('[passw]',DB_USER ,DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT);
// const config = {
//     user: DB_USER,
//     host: DB_HOST,
//     database: DB_DATABASE,
//     password: DB_PASSWORD,
//     allowExitOnIdle: true
// };



export const pool = new Pool(config);

try {
    await pool.query("SELECT NOW()");
    console.log('conectado a la base de datos de Wla');
} catch (error) {
    console.log('error al conectar con la base de datos de Wladi', error.message);
}
