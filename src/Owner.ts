import { Person } from "./Person";


class Owner extends Person {
    constructor(name: string, contactInfo: string) {
        super(name, contactInfo);
    }
}

export { Owner };
