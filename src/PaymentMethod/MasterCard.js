"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterCard = void 0;
var MasterCard = /** @class */ (function () {
    function MasterCard(cardNumber) {
        this.cardNumber = cardNumber;
    }
    MasterCard.prototype.pay = function (amount) {
    };
    MasterCard.prototype.getType = function () {
        return 'MasterCard';
    };
    return MasterCard;
}());
exports.MasterCard = MasterCard;
