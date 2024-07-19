"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const Building_1 = require("./Building");
class House extends Building_1.Building {
    constructor(address, name, size, owner, numberOfRooms) {
        super(address, name, size, owner);
        this.numberOfRooms = numberOfRooms;
    }
    displayInfo() {
        console.log(`House: ${this.name},Address: ${this.address}, size : ${this.size} sqm, number of rooms ${this.numberOfRooms}, Owner: ${this.getOwner()}`);
    }
}
exports.House = House;
