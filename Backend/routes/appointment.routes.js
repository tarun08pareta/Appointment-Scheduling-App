import express from "express";

import { addAppointment, getAppointment, updateAppointment, deleteAppointment } from "../controllers/appointment.controllers.js";


const router = express.Router();

router.post("/addAppointment", addAppointment);      //   /api/v1/appointment/addAppointment
router.get("/getAppointment", getAppointment);         //   /api/v1/appointment/getAppointment
router.put("/updateAppointment/:id", updateAppointment);   //   /api/v1/appointment/updateAppointment/:id
router.delete("/deleteAppointment/:id", deleteAppointment);  //   /api/v1/appointment/deleteAppointment/:id

export default router

