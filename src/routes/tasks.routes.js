import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";

// le estamos diciendo que "tasksRouter" es una ruta que puede recibir peticiones
export const tasksRouter = Router();

// todas estas rutas están protegidas, son solo para usuarios autenticados

// obtiene todas las tareas
tasksRouter.get("/tasks", validateToken, getTasks);
// obtiene una tarea por su id
tasksRouter.get("/tasks/:id", validateToken, getTask);
// añade una nueva tarea
tasksRouter.post("/tasks", validateToken, createTask);
// edita una tarea por su id
tasksRouter.put("/tasks/:id", validateToken, updateTask);
// elimina una tarea por su id
tasksRouter.delete("/tasks/:id", validateToken, deleteTask);
