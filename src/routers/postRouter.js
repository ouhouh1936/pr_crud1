import express from "express";
import {postController, postCreateController, postDetailController} from "../controller/postController"

const postRouter = express.Router();

postRouter.get("/postList", postController);
postRouter.get("/postCreate", postCreateController);
postRouter.get("/postDetail/:id", postDetailController);

export default postRouter;