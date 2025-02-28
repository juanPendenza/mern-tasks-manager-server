import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

// función que valida un token para ver si los usuarios estan autorizados a ingresa
export const validateToken = (req, res, next) => {
  // traigo el toquen que está guardado en la cookie
  const token = req.cookies.token;
  // si el token no existe respondo con msj de error
  if (!token)
    return res.status(401).send({ message: "No token, authorization denied" });
  // verifico si el token de la cookie es igual al que yo generé
  jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decodedToken) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    // acá guardo lo que hay dentro del token en req.user, para que otras rutas puedan acceder a req.user
    req.user = decodedToken;
    next();
  });
};
