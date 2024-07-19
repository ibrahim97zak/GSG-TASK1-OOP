"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPal = void 0;
var PayPal = /** @class */ (function () {
    function PayPal(email) {
        this.email = email;
    }
    PayPal.prototype.pay = function (amount) {
        console.log("paid using PayPal to ".concat(this.email, " and the amont is = ").concat(amount));
    };
    PayPal.prototype.getType = function () {
        return 'PayPal';
    };
    return PayPal;
}());
exports.PayPal = PayPal;
