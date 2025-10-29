import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { getCardsByEmail, createCard, updateCard, deleteCard } from "../controllers/cards.controller.js";

const cardRoutes = express.Router();

cardRoutes.use(authMiddleware)

cardRoutes.get("/:email", getCardsByEmail)
cardRoutes.post("/", createCard)
cardRoutes.put("/:cardNumber", updateCard)
cardRoutes.delete("/:cardNumber", deleteCard)

export default cardRoutes;