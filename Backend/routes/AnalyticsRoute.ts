import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const analyticsRouter = express.Router();
analyticsRouter.get("/", (req, res) => {
    res.send("Analytics route is working!");
});

export default analyticsRouter;