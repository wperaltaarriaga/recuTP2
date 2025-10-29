import express from "express";
import morgan from "morgan";
import cardRoutes from "./routes/cards.routes.js";
import authRoutes from "./routes/auth.routes.js"; // Importar las rutas de autenticación

const morganModule = morgan(':method :url :status :res[content-length] - :response-time ms');

const server = express();
server.use(morganModule);
server.use(express.json()); 

// Rutas de autenticación
server.use("/auth", authRoutes);

// Rutas para las tarjetas
server.use("/cards", cardRoutes);

export default server;