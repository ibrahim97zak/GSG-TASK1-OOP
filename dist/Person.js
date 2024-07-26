"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, contactInfo) {
        this.name = name;
        this.contactInfo = contactInfo;
    }
    getName() {
        return this.name;
    }
    getContactInfo() {
        return this.contactInfo;
    }
}
exports.Person = Person;
