"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
class Contract {
    constructor(customerName, buildingName, rentalPeriod, price, paymentMethod) {
        this.customerName = customerName;
        this.buildingName = buildingName;
        this.rentalPeriod = rentalPeriod;
        this.price = price;
        this.paymentMethod = paymentMethod;
    }
    displayContract() {
        console.log(`Contract: ${this.customerName} has rented ${this.buildingName} for ${this.rentalPeriod} months at $${this.price} per month.`);
    }
    processPayment() {
        this.paymentMethod.pay(this.price * this.rentalPeriod);
    }
}
exports.Contract = Contract;
