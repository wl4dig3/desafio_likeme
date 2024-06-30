import pool from "../config/db.js";

export const addPost = async (titulo, img, descripcion, likes) => {
    const sql = "INSERT INTO post (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [titulo, img, descripcion, likes];

    try {
        const results = await pool.query(sql, values);
        return results.rows[0];
    } catch (error) { console.log('error en archivo query.js', error);}
};

export const getPosts = async () => {
    const sql = "SELECT * FROM post";
    try {
        const results = await pool.query(sql);
        return results.rows;
    } catch (error) { console.log('error en archivo query.js', error);}
};

