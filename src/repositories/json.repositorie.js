import fs from "fs/promises";
import { CreditCard } from "../models/CreditCard.js";

export class JSONRepository {
  constructor(filePath) {
    this.filePath = filePath; // Ruta al archivo JSON
  }

  // Leer todos los datos del archivo JSON
  async getAllData() {
    const data = await fs.readFile(this.filePath,"utf8");
    return JSON.parse(data);
  }

  // Obtener una tarjeta por su número único (cardNumber)
  async getById(cardNumber) {
    const data = await this.getAllData();

    if (!data || data.length === 0) {
      throw new Error("El archivo JSON está vacío");
    }

    const filteredData = data.filter((card) => card.cardNumber === cardNumber);

    if (filteredData.length === 0) {
      throw new Error(`No existe una tarjeta con el número: ${cardNumber}`);
    }

    const plainObject = filteredData[0];

    return new CreditCard(
      plainObject.cardHolder,
      plainObject.expirationDate,
      plainObject.cvv,
      plainObject.email,
      plainObject.cardNumber
    );
  }

  // Crear una nueva tarjeta
  async create(card) {
    const data = await this.getAllData();
    data.push(card);
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2));
    return card;
  }

  // Eliminar una tarjeta
  async delete(cardNumber) {
    const data = await this.getAllData();
    const filteredData = data.filter((item) => item.cardNumber !== cardNumber);
    await fs.writeFile(this.filePath, JSON.stringify(filteredData, null, 2));
    return { cardNumber };
  }

  // Actualizar una tarjeta existente
  async update(card) {
    const data = await this.getAllData();
    const index = data.findIndex((item) => item.cardNumber === card.cardNumber);

    if (index === -1) {
      throw new Error(`No existe una tarjeta con el número: ${card.cardNumber}`);
    }

    data[index] = { ...data[index], ...card };
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2));
    return data[index];
  }
}