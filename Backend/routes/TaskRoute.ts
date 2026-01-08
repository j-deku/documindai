import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const tasksRouter = express.Router();

tasksRouter.get("/", (req, res) => {
    res.send("Tasks route is working!");
});

export default tasksRouter;