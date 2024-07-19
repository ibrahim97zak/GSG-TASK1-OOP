abstract class Building {
    constructor(
        protected address: string,
        protected name: string,
        protected size: number,
        protected owner: string  
    ) {

    }

    abstract displayInfo(): void;

    getName(): string {
        return this.name;
    }
    getOwner(): string {
        return this.owner;
    }
    rent(newOwner: string): void {
        this.owner = newOwner; // Update the current owner to the new owner
        console.log(`${this.name} is now rented by ${newOwner}`);
    }
}
export { Building };