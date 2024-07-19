"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisaCard = void 0;
var VisaCard = /** @class */ (function () {
    function VisaCard(cardNumber) {
        this.cardNumber = cardNumber;
    }
    VisaCard.prototype.pay = function (amount) {
        console.log("Visa Card ".concat(this.cardNumber, " paid ").concat(amount));
    };
    VisaCard.prototype.getType = function () {
        return 'VisaCard';
    };
    return VisaCard;
}());
exports.VisaCard = VisaCard;
