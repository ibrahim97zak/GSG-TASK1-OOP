abstract class Building {
    private currentOwner: string;
    constructor(
        protected address: string,
        protected name: string,
        protected size: number,
        protected initialOwner: string  
    ) {
        this.currentOwner = initialOwner;
    }

    abstract displayInfo(): void;

    getName(): string {
        return this.name;
    }
    getOwner(): string {
        return this.initialOwner;
    }
    rent(newOwner: string): void {
        this.currentOwner = newOwner; // Update the current owner to the new owner
        console.log(`${this.name} is now rented by ${newOwner}`);
    }
}
export { Building };