// ACA VAN LAS VALIDACIONES HECHAS CON ZOD PARA LA AUTENTICACION
// zod es una librería que se usa para hacer validaciones
import { z } from "zod";

// validaciones para el regiser
export const registerSchema = z.object({
  // username debe ser un string
  username: z.string({ required_error: "Username is required" }),
  // email debe ser un string y de tipo email
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  // password debe ser string de al menos 6 caracteres
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

// validaciones para el login
export const loginSchema = z.object({
  // email debe ser un string y de tipo email
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  // password debe ser string de al menos 6 caracteres
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});
