import server from "./server.js"; // Importar el servidor desde server.js

const PORT = 3001;
const HOST = "127.0.0.1";

server.listen(PORT, () => {
  console.log(`Escuchando en http://${HOST}:${PORT}`);
});