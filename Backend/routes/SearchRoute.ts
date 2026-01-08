import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const searchRouter = express.Router();
searchRouter.get("/", (req, res) => {
    res.send("Search route is working!");
});

export default searchRouter;