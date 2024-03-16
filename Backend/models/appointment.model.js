import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  star:{
    type:Boolean,
    required:true,
  }
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
