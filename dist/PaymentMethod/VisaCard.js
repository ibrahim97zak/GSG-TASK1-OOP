"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisaCard = void 0;
class VisaCard {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`Visa Card ${this.cardNumber} paid ${amount}`);
    }
    getType() {
        return 'VisaCard';
    }
}
exports.VisaCard = VisaCard;
