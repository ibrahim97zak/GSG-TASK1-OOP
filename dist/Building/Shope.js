"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shope = void 0;
const Building_1 = require("./Building");
class Shope extends Building_1.Building {
    constructor(address, name, size, owner, shopType) {
        super(address, name, size, owner);
        this.shopType = shopType;
    }
    displayInfo() {
        console.log(`Shop: ${this.name}, Address: ${this.address}, Size: ${this.size} sqm, Type: ${this.shopType}, Owner: ${this.getOwner()}`);
    }
}
exports.Shope = Shope;
