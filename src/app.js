//import server from "./server.js";
//import cardRoutes from "./routes/cards.routes.js";
import express from "express";
import server from "./server.js";
import cardRoutes from "./routes/cards.routes.js";

const PORT = 3001;
const HOST = "127.0.0.1";

server.use(express.json());
server.use("/cards", cardRoutes);

server.listen(PORT, () => {
  console.log(`Server funcionando en http://${HOST}:${PORT}`);
});