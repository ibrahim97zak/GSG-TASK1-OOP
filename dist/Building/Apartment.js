"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
const Building_1 = require("./Building");
class Apartment extends Building_1.Building {
    constructor(address, name, size, owner, floorNumber) {
        super(address, name, size, owner);
        this.floorNumber = floorNumber;
    }
    displayInfo() {
        console.log(`Apartment: ${this.name}, Address: ${this.address}, Size: ${this.size} sqm, Floor: ${this.floorNumber}, Owner: ${this.getOwner()}`);
    }
}
exports.Apartment = Apartment;
