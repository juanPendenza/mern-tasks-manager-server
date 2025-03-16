import * as dotenv from "dotenv";
dotenv.config();

// DIRECCION DE MI DB DE ATLAS:
// mongodb+srv://juanpablopendenza22:5B4gEIpHA3Dy9Ogg@cluster0.kw9gd.mongodb.net/
export const MONGO_URI = process.env.MONGO_URI; /* ||
  "mongodb+srv://juanpablopendenza22:5B4gEIpHA3Dy9Ogg@cluster0.kw9gd.mongodb.net/mern-tasks-manager-db"; */

export const SECRET_ACCESS_TOKEN =
  process.env.SECRET_ACCESS_TOKEN; /* || "secret123" */

export const PORT = process.env.PORT; /* || 3000 */

export const FRONTEND_URL =
  process.env.FRONTEND_URL; /* || "http://localhost:5173" */
