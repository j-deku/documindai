import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const recommendationsRouter = express.Router();
recommendationsRouter.get("/", (req, res) => {
    res.send("Recommendations route is working!");
});

export default recommendationsRouter;