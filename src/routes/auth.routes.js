import { Router } from "express";
import {
  postRegister,
  postLogin,
  postLogout,
  getProfile,
} from "../controllers/auth.controller.js";
import { validateToken } from "../middlewares/validateToken.js";

// le estamos diciendo que "authRouter" es una ruta que puede recibir peticiones
export const authRouter = Router();

// cuando hacen un post a /register ejecuta la función register
authRouter.post("/register", postRegister);
// cuando hacen un post a /login ejecuta la función login
authRouter.post("/login", postLogin);
// cuando hacen un post a /logout ejecuta la función logout
authRouter.post("/logout", postLogout);
// cuando hacen un get a /profile ejecuta la función validateToken, y si está logeado ejecuta profile
authRouter.get("/profile", validateToken, getProfile);
