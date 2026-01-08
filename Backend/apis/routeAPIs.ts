import express from "express";
import dotenv from 'dotenv'; 
import cors from "cors";
dotenv.config();
import userRouter from "../routes/UserRoute";
import adminRouter from "../routes/AdminRoute";
import documentRouter from "../routes/DocumentRoute";

const APIs = express.Router();

APIs.use("/users", userRouter);
APIs.use("/admins", adminRouter); 
APIs.use("/documents", documentRouter);

export default APIs;