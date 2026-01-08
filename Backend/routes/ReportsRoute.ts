import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const reportsRouter = express.Router();

reportsRouter.get("/", (req, res) => {
    res.send("Reports route is working!");
});

export default reportsRouter;