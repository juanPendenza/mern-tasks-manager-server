import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../utils/jwt.js";

// función que registra un nuevo usuario
export const postRegister = async (req, res) => {
  // recibo los datos de la petición
  const { username, email, password } = req.body;
  try {
    // buscamos si el usuario ya existe o no
    const foundedUser = await User.findOne({ email });
    if (foundedUser) return res.status(400).json(["The email alredy exists"]);
    // hasheo la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    // instacio el modelo "User" creado con mongoose
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    // guarda finalmente el usuario en la db
    const savedUser = await newUser.save();
    // creo un token para el nuevo usuario que contiene su id
    const token = await createAccessToken({ id: savedUser._id });
    // creo una cookie con el token
    res.cookie("token", token);
    // respuesta del servidor al cliente
    res.json({
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// función que logea un usuario
export const postLogin = async (req, res) => {
  // recibo los datos de la petición
  const { email, password } = req.body;
  try {
    // busco el usuario por su email
    const foundUser = await User.findOne({ email: { $all: email } });
    // si no encuentra el usuario te avisa
    if (!foundUser) return res.status(400).send(["User not found"]);
    // comparo la contraseña que ingresa con la del usuario encontrado
    const isMatch = await bcrypt.compare(password, foundUser.password);
    // si las contraseñas no coinciden te avisa
    if (!isMatch) return res.status(400).send(["Incorrect password"]);
    // creo un token para el nuevo usuario que contiene su id
    const token = await createAccessToken({ id: foundUser._id });
    // creo una cookie con el token
    res.cookie("token", token);
    // respuesta del servidor al cliente
    res.json({
      id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// función que cierra cesión
export const postLogout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

// función que verifica si un usuario está autenticado
export const getProfile = async (req, res) => {
  // busco el usuario por id
  const foundUser = await User.findById(req.user.id);
  // si el usuario no existe respondo con error
  if (!foundUser) return res.status(400).json({ message: "User not found" });
  // si el usuario existe respondo con sus datos
  res.json({
    id: foundUser.id,
    username: foundUser.username,
    email: foundUser.email,
  });
};
