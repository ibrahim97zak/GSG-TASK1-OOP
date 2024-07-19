"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Contract_1 = require("./Contract");
var Customer = /** @class */ (function () {
    function Customer(name, phoneNumber, paymentMethods) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.contracts = [];
        this.paymentMethods = paymentMethods;
    }
    Customer.prototype.rentBuilding = function (building, rentalPeriod, price, paymentMethod) {
        var contract = new Contract_1.Contract(this.name, building.getName(), rentalPeriod, price, paymentMethod);
        building.rent(this.name);
        this.contracts.push(contract);
        console.log("".concat(this.name, " has rented ").concat(building.getName(), " from ").concat(building.getOwner()));
    };
    Customer.prototype.displayContracts = function () {
        this.contracts.forEach(function (contract) { return contract.displayContract(); });
    };
    Customer.prototype.makePayments = function () {
        this.contracts.forEach(function (contract) { return contract.processPayment(); });
    };
    Customer.prototype.getInfo = function () {
        console.log("Customer Name: ".concat(this.name));
        console.log("Payment Methods:");
        this.paymentMethods.forEach(function (method) { return console.log(" - ".concat(method.getType())); });
    };
    return Customer;
}());
exports.Customer = Customer;
