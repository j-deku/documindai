import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const workflowsRouter = express.Router();

workflowsRouter.get("/", (req, res) => {
    res.send("Workflows route is working!");
});

export default workflowsRouter;