import express from "express";
import { protectRoute } from "../middleware/auth.js";
import { getMessages, getUserForSidebar, markMessageAsSeen, sendMessage } from "../controllers/messageController";
const messsageRouter= express.Router();

messsageRouter.get("/users",protectRoute,getUserForSidebar);
messsageRouter.get("/:id",protectRoute,getMessages);
messsageRouter.put("mark/:id",protectRoute,markMessageAsSeen);
messsageRouter.post("/send/:id",protectRoute,sendMessage);
export default messsageRouter;

