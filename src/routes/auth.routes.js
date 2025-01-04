import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

// le estamos diciendo que "router" es una ruta que puede recibir peticiones
export const authRouter = Router();

// cuando hacen un post a /register ejecuta la función register
authRouter.post("/register", register);
// cuando hacen un post a /login ejecuta la función login
authRouter.post("/login", login);
// cuando hacen un post a /logout ejecuta la función logout
authRouter.post("/logout", logout);
