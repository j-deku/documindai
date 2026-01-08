import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const logsRouter = express.Router();

logsRouter.get("/", (req, res)=>{
    res.send("Logs route is working");
});

export default logsRouter;