// SE INSTANCIA LA BASE DE DATOS
import mongoose from "mongoose";
import { MONGO_URI } from "../config.js";

// me conecto a la db de mongodb mediante mongoose de manera asíncronca
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
