import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const taskCompleteRouter = express.Router();

taskCompleteRouter.get("/", (req, res) => {
    res.send("Task Completed route is working!");
});

export default taskCompleteRouter;