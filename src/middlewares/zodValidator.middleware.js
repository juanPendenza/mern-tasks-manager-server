// validación de los esquemas
export const validateSchema = (schema) => (req, res, next) => {
  try {
    // verifica que lo que viene en el body de la petición cumpla con su esquema
    schema.parse(req.body);
    // si esta todo bien ejecuta el next()
    next();
  } catch (error) {
    // si hay algun error lo responde
    return res.status(400).json(error.errors.map((e) => e.message));
  }
};
