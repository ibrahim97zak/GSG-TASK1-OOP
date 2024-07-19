"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Building = void 0;
var Building = /** @class */ (function () {
    function Building(address, name, size, initialOwner) {
        this.address = address;
        this.name = name;
        this.size = size;
        this.initialOwner = initialOwner;
        this.currentOwner = initialOwner;
    }
    Building.prototype.getName = function () {
        return this.name;
    };
    Building.prototype.getOwner = function () {
        return this.initialOwner;
    };
    Building.prototype.rent = function (newOwner) {
        this.currentOwner = newOwner; // Update the current owner to the new owner
        console.log("".concat(this.name, " is now rented by ").concat(newOwner));
    };
    return Building;
}());
exports.Building = Building;
