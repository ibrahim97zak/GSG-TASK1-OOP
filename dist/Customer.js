"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
// Customer.ts
const Person_1 = require("./Person");
const Contract_1 = require("./Contract");
class Customer extends Person_1.Person {
    constructor(name, contactInfo, paymentMethods) {
        super(name, contactInfo);
        this.contracts = [];
        this.paymentMethods = paymentMethods;
    }
    rentBuilding(building, rentalPeriod, price, paymentMethod) {
        const previousOwner = building.getOwner();
        const contract = new Contract_1.Contract(this, building, rentalPeriod, price, paymentMethod);
        building.rent(this.name);
        this.contracts.push(contract);
        console.log(`${this.name} has rented ${building.getName()} from ${previousOwner}`);
        contract.processPayment();
    }
    displayContracts() {
        if (this.contracts.length === 0) {
            console.log(`${this.name} has no contracts.`);
        }
        else {
            console.log(`${this.name}'s Contracts:`);
            this.contracts.forEach(contract => contract.displayContract());
        }
    }
    displayInfo() {
        console.log(`Customer Name: ${this.name}`);
        console.log(`Payment Methods:`);
        this.paymentMethods.forEach(method => console.log(` - ${method.getType()}`));
    }
    getPaymentMethods() {
        return this.paymentMethods;
    }
}
exports.Customer = Customer;
