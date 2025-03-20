import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../utils/jwt.js";
import jwt from "jsonwebtoken";
import { SECRET_ACCESS_TOKEN } from "../../config.js";
// import * as dotenv from "dotenv";
// dotenv.config();

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
    res.cookie("token", token, {
      httpOnly: true, // impide el acceso al token desde el cliente
      secure: process.env.NODE_ENV === "production", // Asegura que solo se envíe en HTTPS en producción
      sameSite: "none", // Necesario para que funcione en dominios diferentes
      // maxAge: 24 * 60 * 60 * 1000, // 1 día de expiración
    });
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
    res.cookie("token", token, {
      httpOnly: true, // impide el acceso al token desde el cliente
      secure: process.env.NODE_ENV === "production", // Asegura que solo se envíe en HTTPS en producción
      sameSite: "none", // Necesario para que funcione en dominios diferentes
      // maxAge: 24 * 60 * 60 * 1000, // 1 día de expiración
    });
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

// función que verifica el token enviado desde el cliente
export const verifyToken = async (req, res) => {
  // traigo el token que guarde en las cookies
  const { token } = req.cookies;
  // si el token no existe le digo al usuario que no está autenticado
  if (!token) return res.status(400).send({ message: "Unauthorized" });
  // si existe el token verifico si coincide con el de la db
  jwt.verify(token, SECRET_ACCESS_TOKEN, async (err, decodedToken) => {
    // si no coincide le digo al usuario que no está autenticado
    if (err) return res.status(400).send({ message: "Unauthorized" });
    // si coincide busco al usuario con el id que hay guardado en el token
    const foundedUser = await User.findById(decodedToken.id);
    // si no encuentra ningun usuario es porque el token coincide pero no existe el usuario en la db
    if (!foundedUser) return res.status(400).send({ message: "Unauthorized" });
    // si el usuario existe y su token coincide, respondo con sus datos
    return res.json({
      id: foundedUser._id,
      username: foundedUser.username,
      email: foundedUser.email,
    });
  });
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
