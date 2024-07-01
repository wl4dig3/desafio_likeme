import pg from 'pg';
import dotenv from 'dotenv'; 

dotenv.config();

const { Pool } = pg;

const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    allowExitOnIdle: true
};

const pool = new Pool(config);

try {
    await pool.query("SELECT NOW()");
    console.log('conectado a la base de datos de Wla');
} catch (error) {
    console.log('error al conectar con la base de datos de Wladi', error.message);
}

export default pool;
