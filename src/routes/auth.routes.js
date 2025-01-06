import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { validateToken } from "../middlewares/validateToken.js";

// le estamos diciendo que "authRouter" es una ruta que puede recibir peticiones
export const authRouter = Router();

// cuando hacen un post a /register ejecuta la función register
authRouter.post("/register", register);
// cuando hacen un post a /login ejecuta la función login
authRouter.post("/login", login);
// cuando hacen un post a /logout ejecuta la función logout
authRouter.post("/logout", logout);
// cuando hacen un get a /profile ejecuta la función validateToken, y si está logeado ejecuta profile
authRouter.get("/profile", validateToken, profile);
