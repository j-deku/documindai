import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const userTasksRouter = express.Router();
userTasksRouter.get("/", (req, res) => {
    res.send("User Tasks route is working!");
});

export default userTasksRouter;