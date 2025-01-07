// CREO UN MODELO DE TAREA
// ASI SE GUARDAN LAS TAREAS EN LA DB

import mongoose from "mongoose";

// creo el esquema de las tareas
const taskSchema = new mongoose.Schema(
  {
    // título de la tarea de tipo string y requerido
    title: { type: String, required: true, trim: true },
    // descripción de la tarea de tipo string y requerida
    description: { type: String, required: true, trim: true },
    // fecha de ejecución de tipo fecha y por default la fecha actual
    date: { type: Date, default: Date.now },
    // usuario al que pertenece la tarea, es un id del tipo que genera mongo en la db
    // hace una referencia al modelo User
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    // esto es para ver la fecha en que se crea la tarea
    timestamps: true,
  }
);

// exporto el esquema
export const Task = mongoose.model("Task", taskSchema);
