import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const notificationsRouter = express.Router();

notificationsRouter.get("/", (req, res) => {
    res.send("Notifications route is working!");
});

export default notificationsRouter;