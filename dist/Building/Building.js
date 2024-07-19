"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Building = void 0;
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
        return this.owner;
    }
    rent(newOwner) {
        this.owner = newOwner; // Update the current owner to the new owner
    }
}
exports.Building = Building;
