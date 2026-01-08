import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const userEventsRouter = express.Router();
userEventsRouter.get("/", (req, res) => {
    res.send("User Events route is working!");
});

export default userEventsRouter;