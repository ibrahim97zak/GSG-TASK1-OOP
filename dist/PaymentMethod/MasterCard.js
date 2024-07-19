"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterCard = void 0;
class MasterCard {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
    }
    getType() {
        return 'MasterCard';
    }
}
exports.MasterCard = MasterCard;
