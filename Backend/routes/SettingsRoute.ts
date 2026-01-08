import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const settingsRouter = express.Router();

settingsRouter.get("/", (req,res)=>{
    res.send("Settings is working");
});

export default settingsRouter;