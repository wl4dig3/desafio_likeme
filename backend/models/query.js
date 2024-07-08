import {pool} from "../config/db.js";

const addPost = async (titulo, img, descripcion, likes) => {
    const sql = "INSERT INTO post (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [titulo, img, descripcion, likes];

    try {
        const results = await pool.query(sql, values);
        return results.rows[0];
    } catch (error) { console.log('error en archivo query.js', error);}
};

const getPosts = async () => {
    const sql = "SELECT * FROM post";
    try {
        const results = await pool.query(sql);
        return results.rows;
    } catch (error) { console.log('error en archivo query.js', error.code, error.message);}
};

const deletePost = async (id) => {
    const sql = "DELETE FROM post WHERE id = $1";
    const values = [id];
    try {
        const results = await pool.query(sql, values);
        return results.rows;
    } catch (error) { console.log('error en archivo query.js', error.message);} 
}

const updatePost = async (titulo, img, descripcion, likes, id) => {
    try {
        const sql = "UPDATE post SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *";
        const values = [titulo, img, descripcion, likes, id];
        const results = await pool.query(sql, values);
        if (results.rowCount > 0) {
            return results.rows;
        }
    } catch (error) { console.log('error en archivo query.js', error.code, error.message);} 
}

export const models = {
    addPost,
    getPosts,
    deletePost,
    updatePost
};