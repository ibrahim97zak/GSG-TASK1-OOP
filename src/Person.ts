abstract class Person {
    constructor(
        protected name: string,
        protected contactInfo: string
    ) {}

    getName(): string {
        return this.name;
    }

    getContactInfo(): string {
        return this.contactInfo;
    }
}

export { Person };
