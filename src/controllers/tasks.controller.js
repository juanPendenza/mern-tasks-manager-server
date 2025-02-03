import { Task } from "../models/task.model.js";

// obtiene todas las tareas
export const getTasks = async (req, res) => {
  try {
    // busco todas las tareas
    const tasks = await Task.find({ user: req.user.id }).populate("user");
    // respondo con las tareas
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// obtiene una tarea
export const getTask = async (req, res) => {
  try {
    // busco una tarea por su id
    const foundedTask = await Task.findById(req.params.id).populate("user");
    // si la tarea no existe respondo con msj de error
    if (!foundedTask)
      return res.status(404).json({ message: "Task not found" });
    // si la tarea existe la respondo
    res.json(foundedTask);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

// añade una nueva tarea
export const createTask = async (req, res) => {
  try {
    // defino el body con los campos de la tarea
    const { title, description, date } = req.body;
    // creo una instancia del modelo Task
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    // guardo la nueva tarea en la db
    const savedTask = await newTask.save();
    // respondo con la nueva tarea
    res.json(savedTask);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// edita una tarea
export const updateTask = async (req, res) => {
  try {
    // busco una tarea por su id y la actualizo
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // si la tarea no existe respondo con msj de error
    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });
    // respondo con la tarea actualizada
    res.json(updatedTask);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

// elimina una tarea
export const deleteTask = async (req, res) => {
  try {
    // busco una tarea por su id y la elimino
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    // si la tarea no existe respondo con msj de error
    if (!deletedTask)
      return res.status(404).json({ message: "Task not found" });
    // respondo con la tarea eliminada
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};
