import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
import APIs from "./apis/routeAPIs";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api", APIs);

app.get("/", (req,res)=>{
res.sendFile(__dirname + "/index.html");
});
app.listen(port, ()=>{
    console.log(`sever running on http://localhost:${port}`)
})