import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const AIsummaryRouter = express.Router();

AIsummaryRouter.get("/", (req,res)=>{
    res.send("AI summary is working");
});

export default AIsummaryRouter;