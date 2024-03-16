import express from "express";

import dotenv from 'dotenv';
import cors from "cors";


import appointmentRouter from "./routes/appointment.routes.js";

import { dbConnection } from "./db/dbConnection.js";

const app = express();
dotenv.config();


app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/appointment", appointmentRouter);



dbConnection();
export default app;
