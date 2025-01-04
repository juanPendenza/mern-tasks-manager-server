import jwt from "jsonwebtoken";
import { SECRET_ACCESS_TOKEN } from "../config.js";

// el token es como un pase que se usa para validar si un usuario tiene autenticación para hacer cierta operación
// en este caso le digo a jwt que me cree un token que dentro guarde el id de la persona
export function createAccessToken(payload) {
  // este objeto ejecuta resolve si todo sale bien, y reject si sale mal
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload, // lo que quiero guardar dentro del token
      SECRET_ACCESS_TOKEN, // clave de acceso
      { expiresIn: "1d" }, // fecha de expiración
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
