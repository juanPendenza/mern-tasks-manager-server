// SE INSTANCIA LA BASE DE DATOS
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

// me conecto a la db de mongodb mediante mongoose de manera asíncronca
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
