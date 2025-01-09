import { Router } from "express";
import {
  postRegister,
  postLogin,
  postLogout,
  getProfile,
} from "../controllers/auth.controller.js";
import { validateToken } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/zodValidator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

// le estamos diciendo que "authRouter" es una ruta que puede recibir peticiones
export const authRouter = Router();

// registra un usuario
authRouter.post("/register", validateSchema(registerSchema), postRegister);
// logea un usuario
authRouter.post("/login", validateSchema(loginSchema), postLogin);
// deslogea un usuario
authRouter.post("/logout", postLogout);
// muestra el perfil de un usuario
authRouter.get("/profile", validateToken, getProfile);
