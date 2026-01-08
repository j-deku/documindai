import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const authRouter = express.Router();
authRouter.get("/", (req, res) => {
    res.send("Auth route is working!");
});

export default authRouter;