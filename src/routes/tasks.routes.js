import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { tasks } from "../controllers/tasks.controller.js";

// le estamos diciendo que "tasksRouter" es una ruta que puede recibir peticiones
export const tasksRouter = Router();

// cuando hacen un get a /tasks ejecuta la función validateToken, y si está logeado ejecuta tasks
tasksRouter.get("/tasks", validateToken, tasks);
