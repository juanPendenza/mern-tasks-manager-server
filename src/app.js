// SE CONFIGURA TODO LO DE EXPRESS
import express from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";

// en esta línea creo el servidor
const app = express();

// morgan es un módulo que me ayuda a ver las peticiones que van llegando al backend
// se lo llama "loger", y nos muestra por consola las peticiones que van llegando
app.use(morgan("dev"));

// es para poder parsear los cuerpos de las peticiones
app.use(express.json());

// le digo a express que use el router
app.use("/api", authRouter);

// exporto app para poder usarlo en el index
export default app;
