// SE CONFIGURA TODO LO DE EXPRESS
import express from "express";
import morgan from "morgan";

// en esta línea creo el servidor
const app = express();

// morgan es un módulo que me ayuda a ver las peticiones que van llegando al backend
// se lo llama "loger", y nos muestra por consola las peticiones que van llegando
app.use(morgan("dev"));

// exporto app para poder usarlo en el index
export default app;
