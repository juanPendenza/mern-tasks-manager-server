import { User } from "../models/user.model.js";

// función que registra un nuevo usuario
export const register = async (req, res) => {
  // digo que el body es un objeto que tiene nombre, mail y contraseña
  // van a ser los que cargue la persona en el cliente al registrarse
  const { username, email, password } = req.body;

  // lo meto dentro de un try catch porque siempre puede haber errores al cargar datos en la db
  try {
    // instacia el modelo "User" creado con mongoose
    const newUser = new User({
      username,
      email,
      password,
    });
    // guarda finalmente el usuario en la db
    await newUser.save();
    // respuesta del servidor
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

// función que logea un usuario
export const login = (req, res) => res.send("login");
