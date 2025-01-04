// SE INSTANCIA LA BASE DE DATOS
import mongoose from "mongoose";

// me conecto a la db de mongodb mediante mongoose de manera asíncronca
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mern-tasks-manager-db");
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
