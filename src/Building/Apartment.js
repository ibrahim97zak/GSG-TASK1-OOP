"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
var Building_1 = require("./Building");
var Apartment = /** @class */ (function (_super) {
    __extends(Apartment, _super);
    function Apartment(address, name, size, owner, floorNumber) {
        var _this = _super.call(this, address, name, size, owner) || this;
        _this.floorNumber = floorNumber;
        return _this;
    }
    Apartment.prototype.displayInfo = function () {
        console.log("Apartment: ".concat(this.name, ", Address: ").concat(this.address, ", Size: ").concat(this.size, " sqm, Floor: ").concat(this.floorNumber, ", Owner: ").concat(this.getOwner()));
    };
    return Apartment;
}(Building_1.Building));
exports.Apartment = Apartment;
