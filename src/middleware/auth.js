
export const authMiddleware = (req, res, next) => {
  console.log("Authorization Header:", req.headers.authorization);
  
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "El servidor no esta recibiendo el encabezado" });
  }

  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  if (username === "admin" && password === "admin1234") {
    return next();
  }

  return res.status(401).json({ message: "credenciales invalidas" });
};
