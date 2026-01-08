import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const documentRouter = express.Router();

documentRouter.get("/", (req, res) => {
    res.send("Document route is working!");
});

export default documentRouter;