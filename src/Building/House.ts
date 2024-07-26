import { Owner } from "../Owner";
import { Building } from "./Building";

class House extends Building {
    constructor(
        address :string,
        name :string,
        size:number,
        owner: Owner,
        private numberOfRooms :number,
    ) {
        super(address,name,size,owner);
    }
    displayInfo(): void {
        console.log(`House: ${this.name},Address: ${this.address}, size : ${this.size} sqm, number of rooms ${this.numberOfRooms}, Owner: ${this.getOwner()}`)
    }
}
export {House}