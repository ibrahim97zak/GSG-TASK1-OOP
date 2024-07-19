"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Building = void 0;
class Building {
    constructor(address, name, size, initialOwner) {
        this.address = address;
        this.name = name;
        this.size = size;
        this.initialOwner = initialOwner;
        this.currentOwner = initialOwner;
    }
    getName() {
        return this.name;
    }
    getOwner() {
        return this.initialOwner;
    }
    rent(newOwner) {
        this.currentOwner = newOwner; // Update the current owner to the new owner
        console.log(`${this.name} is now rented by ${newOwner}`);
    }
}
exports.Building = Building;
