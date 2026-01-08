import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const exportRouter = express.Router();
exportRouter.get("/", (req, res) => {
    res.send("Export route is working!");
});

export default exportRouter;