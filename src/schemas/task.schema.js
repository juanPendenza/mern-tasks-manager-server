// ACA VAN LAS VALIDACIONES HECHAS CON ZOD PARA LAS TAREAS
import { datetimeRegex, z } from "zod";

// esquema para crear tareas
export const createTaskSchema = z.object({
  // title de tipo string
  title: z.string({ required_error: "Title is required" }),
  // description opcional de tipo string
  description: z.string({ required_error: "Description is required" }),
  // date opcional de tipo string y tipo fecha
  date: z.string().datetime().optional(),
});
