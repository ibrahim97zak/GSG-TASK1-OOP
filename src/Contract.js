"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
var Contract = /** @class */ (function () {
    function Contract(customerName, buildingName, rentalPeriod, price, paymentMethod) {
        this.customerName = customerName;
        this.buildingName = buildingName;
        this.rentalPeriod = rentalPeriod;
        this.price = price;
        this.paymentMethod = paymentMethod;
    }
    Contract.prototype.displayContract = function () {
        console.log("Contract: ".concat(this.customerName, " has rented ").concat(this.buildingName, " for ").concat(this.rentalPeriod, " months at $").concat(this.price, " per month."));
    };
    Contract.prototype.processPayment = function () {
        this.paymentMethod.pay(this.price * this.rentalPeriod);
    };
    return Contract;
}());
exports.Contract = Contract;
