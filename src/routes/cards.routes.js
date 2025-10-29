// src/routes/cards.routes.js
import express from "express";
import {
  getCardsByEmail,
  createCard,
  updateCard,
  deleteCard,
} from "../controllers/cards.controller.js";
import { authMiddleware } from "../middleware/auth.js";


const cardRoutes = express.Router();

cardRoutes.use(authMiddleware);

// GET /cards/:email
cardRoutes.get("/:email", getCardsByEmail);

// POST /cards
cardRoutes.post("/", createCard);

// PUT /cards/:cardNumber
cardRoutes.put("/:cardNumber", updateCard);

// DELETE /cards/:cardNumber
cardRoutes.delete("/:cardNumber", deleteCard);

export default cardRoutes;