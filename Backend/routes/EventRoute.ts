import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const eventsRouter = express.Router();

eventsRouter.get("/", (req, res) => {
    res.send("Events route is working!");
});

export default eventsRouter;