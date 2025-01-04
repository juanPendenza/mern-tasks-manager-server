// ACA CREO UN MODELO DE USUARIO
// DONDE LE VOY A DECIR COMO TIENEN QUE SER LOS USUARIOS EN LA DB

import mongoose from "mongoose";

// creo el esquema User (es como crear una interfaz en ts)
// acá solamente lo estamos definiendo
const userSchema = new mongoose.Schema(
  {
    // nombre de usuario tipo string, requerido, sin espacios al inicio ni al final
    username: { type: String, required: true, trim: true },
    // email tipo string, requerido, sin espacios al inicio ni al final, único
    email: { type: String, required: true, trim: true, unique: true },
    // contraseña tipo string, requerida
    password: { type: String, required: true },
  },
  {
    // esto es para ver la fecha en que se crea el usuario
    timestamps: true,
  }
);

// acá creo el modelo User basado en el esquema que creé arriba
export const User = mongoose.model("User", userSchema);
