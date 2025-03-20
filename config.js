import * as dotenv from "dotenv";
dotenv.config();
// mongodb+srv://juanpablopendenza22:5B4gEIpHA3Dy9Ogg@cluster0.kw9gd.mongodb.net/mern-tasks-manager-db
export const MONGO_URI =
  process.env.MONGO_URI; /* || "mongodb://localhost/mern-tasks-manager-db" */

export const SECRET_ACCESS_TOKEN =
  process.env.SECRET_ACCESS_TOKEN; /* || "secret123" */

export const PORT = process.env.PORT; /* || 3000 */

export const FRONTEND_URL =
  process.env.FRONTEND_URL; /* || "http://localhost:5173" */

export const BACKEND_URL =
  process.env.BACKEND_URL; /* || "http://localhost:3000" */
