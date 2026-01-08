import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import AItranslationsRouter from "./AItranslationRoute";
dotenv.config();

const AIclassificationsRouter = express.Router();

AIclassificationsRouter.get("/", (req,res)=>{
    res.send("AI classsification is working");
});

export default AIclassificationsRouter;