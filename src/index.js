// ES EL ENCARGADO DE INICIAR LA APP
import app from "./app.js";
import { connectDB } from "./db.js";
import * as dotenv from "dotenv";
dotenv.config();

connectDB();

// muestro donde funciona el servidor
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port http://localhost:${process.env.PORT}`);
});
