import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("User route is working!");
});

export default userRouter;