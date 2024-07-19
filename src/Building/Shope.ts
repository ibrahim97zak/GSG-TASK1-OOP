import { Building } from "./Building";

class Shope extends Building {
    constructor(
        address :string,
        name :string,
        size:number,
        owner: string,
        private shopType:string,
    ){
        super(address,name,size,owner);
    }
    displayInfo(): void {
        console.log(`Shop: ${this.name}, Address: ${this.address}, Size: ${this.size} sqm, Type: ${this.shopType}, Owner: ${this.getOwner()}`);

    }

}
export {Shope}