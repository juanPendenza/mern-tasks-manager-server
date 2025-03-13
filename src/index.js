// ES EL ENCARGADO DE INICIAR LA APP
import { PORT } from "../config.js";
import app from "./app.js";
import { connectDB } from "./db.js";
// import * as dotenv from "dotenv";
// dotenv.config();

connectDB();

// muestro donde funciona el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
