import express from "express";
import {upload, watch, edit, deleteVideo} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload); //파라미터를 받는 것 보다 위에 위치시킨다. 

export default videoRouter;