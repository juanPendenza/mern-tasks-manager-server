// SE CONFIGURA TODO LO DE EXPRESS
import express from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import { tasksRouter } from "./routes/tasks.routes.js";
import cors from "cors";
import { BACKEND_URL, FRONTEND_URL } from "../config.js";

// en esta línea creo el servidor
const app = express();

// le digo que use cors para que no haya problema al trabajar con distintos puerto en el front y back
app.use(
  cors({
    origin: BACKEND_URL, // solo puede hacerlo con el 5173
    credentials: true, // pata que se puedan establecer las cookies
  })
);

// morgan es un módulo que me ayuda a ver las peticiones que van llegando al backend
// se lo llama "loger", y nos muestra por consola las peticiones que van llegando
app.use(morgan("dev"));

// es para poder parsear los cuerpos de las peticiones
app.use(express.json());

// es para parsear las cookies y poder leerlas (parecido al express.json())
app.use(cookieParser());

// le digo a express que use el router
app.use(authRouter);
app.use(tasksRouter);

// exporto app para poder usarlo en el index
export default app;
