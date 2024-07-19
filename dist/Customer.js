"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const Contract_1 = require("./Contract");
class Customer {
    constructor(name, phoneNumber, paymentMethods) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.contracts = [];
        this.paymentMethods = paymentMethods;
    }
    rentBuilding(building, rentalPeriod, price, paymentMethod) {
        const contract = new Contract_1.Contract(this, building, rentalPeriod, price, paymentMethod);
        building.rent(this.name);
        this.contracts.push(contract);
        console.log(`${this.name} has rented ${building.getName()} from ${building.getOwner()}`);
    }
    displayContracts() {
        this.contracts.forEach(contract => contract.displayContract());
    }
    makePayments() {
        this.contracts.forEach(contract => contract.processPayment());
    }
    getInfo() {
        console.log(`Customer Name: ${this.name}`);
        console.log(`Payment Methods:`);
        this.paymentMethods.forEach(method => console.log(` - ${method.getType()}`));
    }
    getName() {
        return this.name;
    }
}
exports.Customer = Customer;
