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
exports.House = void 0;
var Building_1 = require("./Building");
var House = /** @class */ (function (_super) {
    __extends(House, _super);
    function House(address, name, size, owner, numberOfRooms) {
        var _this = _super.call(this, address, name, size, owner) || this;
        _this.numberOfRooms = numberOfRooms;
        return _this;
    }
    House.prototype.displayInfo = function () {
        console.log("House: ".concat(this.name, ",Address: ").concat(this.address, ", size : ").concat(this.size, " sqm, number of rooms ").concat(this.numberOfRooms, ", Owner: ").concat(this.getOwner()));
    };
    return House;
}(Building_1.Building));
exports.House = House;
