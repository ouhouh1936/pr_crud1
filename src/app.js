import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import connect from "../db";
import postRouter from "./routers/postRouter"
dotenv.config();

const PORT = 7000;
const app = express();

app.set("view engine" , "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`))
app.use(helmet());
connect();

app.use("/" , postRouter)

app.listen(PORT, () => {
    console.log(`😈 ${PORT}server start`)
})
