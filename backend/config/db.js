import pg from 'pg';
import dotenv from 'dotenv'; 

dotenv.config();

const { Pool } = pg;

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'desafio_likeme',
    password: 'Dji3pro',
    port: 5432,
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
