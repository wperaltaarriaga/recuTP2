import express from "express";
import jwt from "jsonwebtoken";

const authRoutes = express.Router();

// Clave secreta para firmar el token
const SECRET_KEY = "mi-clave-secreta";

// Ruta para iniciar sesión y generar un token
authRoutes.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validar las credenciales (esto es solo un ejemplo)
  if (username === "admin" && password === "admin1234") {
    const payload = { username, role: "admin" };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });

    res.json({
      OK: true,
      message: "Inicio de sesión exitoso",
      token,
    });
  } else {
    res.status(401).json({
      OK: false,
      message: "Credenciales inválidas",
    });
  }
});

export default authRoutes;