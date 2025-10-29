import { randomBytes } from "crypto";

export class CreditCard {
  constructor(cardHolder, expirationDate, cvv, email, cardNumber = null) {
    this.cardNumber = cardNumber ?? randomBytes(8).toString("hex");
    this.cardHolder = cardHolder;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
    this.email = email;
  }
}
  
