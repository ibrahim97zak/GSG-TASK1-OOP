import { Owner } from "../Owner";
import { Building } from "./Building";

class Apartment extends Building {
    constructor(
        address: string,
        name: string,
        size: number,
        owner: Owner,
        private floorNumber: number,
    ) {
        super(address,name,size,owner)
    }
    displayInfo(): void {
        console.log(`Apartment: ${this.name}, Address: ${this.address}, Size: ${this.size} sqm, Floor: ${this.floorNumber}, Owner: ${this.getOwner()}`);
    }

}
export {Apartment}