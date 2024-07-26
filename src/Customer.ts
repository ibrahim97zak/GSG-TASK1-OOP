// Customer.ts
import { Person } from './Person';
import { Building } from './Building/Building';
import { Contract } from './Contract';
import { PaymentMethod } from './PaymentMethod/PaymenthMethod';


class Customer extends Person {
    private contracts: Contract[] = [];
    private paymentMethods: PaymentMethod[];

    constructor(name: string, contactInfo: string, paymentMethods: PaymentMethod[]) {
        super(name, contactInfo);
        this.paymentMethods = paymentMethods;
    }

    rentBuilding(building: Building, rentalPeriod: number, price: number, paymentMethod: PaymentMethod): void {
        const previousOwner = building.getOwner();
        const contract = new Contract(this, building, rentalPeriod, price, paymentMethod);
        building.rent(this.name);
        this.contracts.push(contract);
        console.log(`${this.name} has rented ${building.getName()} from ${previousOwner}`);
        contract.processPayment();
    }

    displayContracts(): void {
        if (this.contracts.length === 0) {
            console.log(`${this.name} has no contracts.`);
        } else {
            console.log(`${this.name}'s Contracts:`);
            this.contracts.forEach(contract => contract.displayContract());
        }
    }

    displayInfo(): void {
        console.log(`Customer Name: ${this.name}`);
        console.log(`Payment Methods:`);
        this.paymentMethods.forEach(method => console.log(` - ${method.getType()}`));
    }

    getPaymentMethods(): PaymentMethod[] {
        return this.paymentMethods;
    }
}

export { Customer };
