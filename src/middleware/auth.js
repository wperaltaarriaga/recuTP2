
import jwt from "jsonwebtoken";
import { CONFIG } from "../config/config.js"; 

export const authMiddleware = (req, res, next) => {
  // Leer el token del encabezado Authorization
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      OK: false,
      message: "No se proporcionó un token de autorización",
    });
  }

  // bearer + token
  const token = authHeader.split(" ")[1];

  try {
  
    const decoded = jwt.verify(token, CONFIG.SECRET_KEY);

    // Agregar la información del usuario al objeto req
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      OK: false,
      message: "Token inválido o expirado",
    });
  }
}