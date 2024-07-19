"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
class Contract {
    constructor(customer, building, rentalPeriod, price, paymentMethod) {
        this.customer = customer;
        this.building = building;
        this.rentalPeriod = rentalPeriod;
        this.price = price;
        this.paymentMethod = paymentMethod;
    }
    displayContract() {
        console.log(`Contract: ${this.customer.getName()} has rented ${this.building.getName()} for ${this.rentalPeriod} months at $${this.price} per month.`);
    }
    processPayment() {
        this.paymentMethod.pay(this.price * this.rentalPeriod);
    }
}
exports.Contract = Contract;
