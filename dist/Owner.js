"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
const Person_1 = require("./Person");
class Owner extends Person_1.Person {
    constructor(name, contactInfo) {
        super(name, contactInfo);
    }
}
exports.Owner = Owner;
