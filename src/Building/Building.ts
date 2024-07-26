import { Owner } from "../Owner";

abstract class Building {
    constructor(
        protected address: string,
        protected name: string,
        protected size: number,
        protected owner: Owner  
    ) {

    }

    abstract displayInfo(): void;

    getName(): string {
        return this.name;
    }
    getOwner(): string {
        return this.owner.getName();
    }
    rent(newOwner: string): void {
        this.owner = new Owner(newOwner, ''); // Update the current owner to the new owner
    }
}
export { Building };