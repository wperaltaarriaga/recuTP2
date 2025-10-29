// Controlador para manejar las operaciones CRUD de tarjetas
import { readJSON, writeJSON } from "../storage/jsonStorage.js";

const filePath = "./data/cards.json"; // Ruta al archivo JSON

// Obtener tarjetas por email
export const getCardsByEmail = async (req, res) => {
  const { email } = req.params; // Obtiene el email de los parámetros
  const cards = await readJSON(filePath); // Lee las tarjetas del archivo JSON
  const userCards = cards.filter((card) => card.email === email); // Filtra por email
  res.json(userCards); // Devuelve las tarjetas del usuario
};

// Crear una nueva tarjeta
export const createCard = async (req, res) => {
  const newCard = req.body; // Obtiene los datos de la tarjeta del cuerpo de la solicitud
  const cards = await readJSON(filePath); // Lee las tarjetas existentes
  cards.push(newCard); // Agrega la nueva tarjeta
  await writeJSON(filePath, cards); // Guarda los cambios en el archivo JSON
  res.status(201).json(newCard); // Devuelve la tarjeta creada
};

// Actualizar una tarjeta existente
export const updateCard = async (req, res) => {
  const { cardNumber } = req.params; // Obtiene el número de tarjeta de los parámetros
  const updatedCard = req.body; // Obtiene los datos actualizados del cuerpo de la solicitud
  const cards = await readJSON(filePath); // Lee las tarjetas existentes
  const index = cards.findIndex((card) => card.cardNumber === cardNumber); // Busca la tarjeta
  if (index === -1) return res.status(404).json({ message: "Card not found" }); // Si no existe, devuelve un error
  cards[index] = { ...cards[index], ...updatedCard }; // Actualiza los datos de la tarjeta
  await writeJSON(filePath, cards); // Guarda los cambios en el archivo JSON
  res.json(cards[index]); // Devuelve la tarjeta actualizada
};

// Eliminar una tarjeta
export const deleteCard = async (req, res) => {
  const { cardNumber } = req.params; // Obtiene el número de tarjeta de los parámetros
  const cards = await readJSON(filePath); // Lee las tarjetas existentes
  const filteredCards = cards.filter((card) => card.cardNumber !== cardNumber); // Filtra las tarjetas
  await writeJSON(filePath, filteredCards); // Guarda los cambios en el archivo JSON
  res.status(204).send(); // Devuelve una respuesta sin contenido
};



