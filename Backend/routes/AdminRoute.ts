import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const adminRouter = express.Router();   
adminRouter.get("/", (req, res) => {
    res.send("Admin route is working!");
});

export default adminRouter;