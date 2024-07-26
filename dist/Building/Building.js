"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Building = void 0;
const Owner_1 = require("../Owner");
class Building {
    constructor(address, name, size, owner) {
        this.address = address;
        this.name = name;
        this.size = size;
        this.owner = owner;
    }
    getName() {
        return this.name;
    }
    getOwner() {
        return this.owner.getName();
    }
    rent(newOwner) {
        this.owner = new Owner_1.Owner(newOwner, ''); // Update the current owner to the new owner
    }
}
exports.Building = Building;
