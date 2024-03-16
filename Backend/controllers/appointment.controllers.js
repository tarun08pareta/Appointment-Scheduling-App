// controllers/appointment.controllers.js

import { Appointment } from "../models/appointment.model.js";

// Controller function to add a new appointment


export const addAppointment = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log request body for debugging

    const { title, date, star } = req.body;
    const newAppointment = new Appointment({ title, date, star });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error("Error adding appointment:", error); // Log the error for debugging
    res.status(400).json({ message: error.message });
  }
};



// Controller function to get all appointments
export const getAppointment = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update an appointment
export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { title, date, star } = req.body;

  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { title, date, star },
      { new: true }
    );
    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Controller function to delete an appointment
export const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    await Appointment.findByIdAndDelete(id);
    res.status(200).json({ message: "Appointment deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
