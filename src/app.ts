import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { projectRouter, taskRouter, userRouter } from "./routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(projectRouter);
app.use(taskRouter);

export { app };
