"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPal = void 0;
class PayPal {
    constructor(email) {
        this.email = email;
    }
    pay(amount) {
        console.log(`paid using PayPal to ${this.email} and the amont is = ${amount}`);
    }
    getType() {
        return 'PayPal';
    }
}
exports.PayPal = PayPal;
