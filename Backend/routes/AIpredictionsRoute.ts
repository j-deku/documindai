import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const AIpredictionsRouter = express.Router();

AIpredictionsRouter.get("/", (req,res)=>{
    res.send("AI prediction route is working");
});

export default AIpredictionsRouter;