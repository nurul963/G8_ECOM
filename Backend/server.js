import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { PORT } from "./util/constant.js";
import mainRoute from './routes/index.js';
import sequelize, { connectDB } from "./config/database.js";
import './modals/index.js';
const app=express();
app.use(bodyParser.json());
app.use(cookieParser());
app.get("/",(req,resp)=>{
    return resp.send("Hello world");
});
app.use("/api",mainRoute);
app.listen(PORT,async()=>{
    console.log(`App start: http://localhost:${PORT}`);
    connectDB();
    await sequelize.sync();
})