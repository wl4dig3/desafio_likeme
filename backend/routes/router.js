import express from "express";
import { controllers } from "../controllers/controller.js";

const router = express.Router();

router.get("/", controllers.home);

router.post("/post", controllers.addPost);  

router.get("/posts", controllers.getPosts);

 router.put("/post/post/:id", controllers.updatePost);

 router.delete("/post/:id", controllers.deletePost);

export default router;