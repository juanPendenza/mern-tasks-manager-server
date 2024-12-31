// ES EL ENCARGADO DE INICIAR LA APP
import app from "./app.js";

const port = 3000;

// muestro donde funciona el servidor
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
