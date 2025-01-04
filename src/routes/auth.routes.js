import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

// le estamos diciendo que "router" es una ruta que puede recibir peticiones
export const authRouter = Router();

// cuando hacen un post a /register ejecuta la función register
authRouter.post("/register", register);
// cuando hacen un post a /login ejecuta la función login
authRouter.post("/login", login);
