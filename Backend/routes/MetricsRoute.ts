import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const metricsRouter = express.Router();
metricsRouter.get("/", (req, res) => {
    res.send("Metrics route is working!");
});

export default metricsRouter;