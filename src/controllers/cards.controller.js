import { JSONRepository } from "../repositories/json.repositorie.js";

const repository = new JSONRepository("./src/data/cards.json");

// Obtener tarjetas por email
export const getCardsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const cards = await repository.getAllData();
    const userCards = cards.filter((card) => card.email === email);

    res.json({
      OK: true,
      message: `Tarjetas asociadas al email ${email}`,
      payload: userCards,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Error al obtener las tarjetas",
      error: error.message,
    });
  }
};

// Crear una nueva tarjeta
export const createCard = async (req, res) => {
  try {
    const newCard = req.body;
    const createdCard = await repository.create(newCard);

    res.status(201).json({
      OK: true,
      message: "Tarjeta creada exitosamente",
      payload: createdCard,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Error al crear la tarjeta",
      error: error.message,
    });
  }
};

// Actualizar una tarjeta existente
export const updateCard = async (req, res) => {
  try {
    const { cardNumber } = req.params;
    const updatedCard = { ...req.body, cardNumber };
    const card = await repository.update(updatedCard);

    res.json({
      OK: true,
      message: "Tarjeta actualizada exitosamente",
      payload: card,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Error al actualizar la tarjeta",
      error: error.message,
    });
  }
};

// Eliminar una tarjeta
export const deleteCard = async (req, res) => {
  try {
    const { cardNumber } = req.params;
    await repository.delete(cardNumber);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Error al eliminar la tarjeta",
      error: error.message,
    });
  }
}