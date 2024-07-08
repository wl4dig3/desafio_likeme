import { models } from "../models/query.js";

const home = (req, res) => {
  res.send("hola desde router");
};
const getPosts = async (req, res) => {
  try {
    const response = await models.getPosts();
    res.json({ data: response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addPost = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body;
    const response = await models.addPost(titulo, img, descripcion, likes);

    res.status(201).send("Hola se ha agregado un nuevo like");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, img, descripcion, likes } = req.body;
    await models.updatePost(
      titulo,
      img,
      descripcion,
      likes,
      id
    );
    res.send("Se ha actualizado el like");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await models.deletePost(id);
    res.send("Se ha eliminado el post");
  } catch (error) {
    console.log("Error en el DELETE", { message: error.message });
  }
};

export const controllers = {
  getPosts,
  addPost,
  updatePost,
  deletePost,
  home,
};
