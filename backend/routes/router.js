import express from "express";
import { addPost, getPosts } from "../models/query.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hola desde router");
});

router.post("/post", async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    await addPost(titulo, img, descripcion, likes);
    res.send("Hola se ha agregado un nuevo like");
});  

router.get("/post", async (req, res) => {
    const response = await getPosts(); 
    res.json({data: response});
 });

export default router;