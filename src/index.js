// ES EL ENCARGADO DE INICIAR LA APP
import app from "./app.js";
import { connectDB } from "./db.js";

// puerto donde corre el servidor
const port = 3000;

connectDB();

// muestro donde funciona el servidor
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
