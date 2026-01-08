import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const AItranslationsRouter = express.Router();

AItranslationsRouter.get("/", (req,res)=>{
    res.send("AI translation is working");
});

export default AItranslationsRouter;