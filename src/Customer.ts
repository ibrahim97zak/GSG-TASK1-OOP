import { Building } from "./Building/Building";
import { Contract } from "./Contract";
import { PaymentMethod } from "./PaymentMethod/PaymenthMethod";

class Customer{
    private contracts:Contract[]=[];
    private paymentMethods: PaymentMethod[];
    constructor(
        private name:string,
        private phoneNumber:number,
        paymentMethods: PaymentMethod[]
    ){
        this.paymentMethods = paymentMethods;
    }
    rentBuilding(building: Building, rentalPeriod: number, price: number, paymentMethod: PaymentMethod): void {
        const previousOwner = building.getOwner(); // Capture the previous owner
        const contract = new Contract(this, building, rentalPeriod, price, paymentMethod);
        building.rent(this.name);
        this.contracts.push(contract);
        console.log(`${this.name} has rented ${building.getName()} from ${previousOwner}`);
    }
    displayContracts():void {
        this.contracts.forEach(contract => contract.displayContract())
    }
    makePayments(): void {
        this.contracts.forEach(contract => contract.processPayment());
    }
    getInfo(): void {
        console.log(`Customer Name: ${this.name}`);
        console.log(`Payment Methods:`);
        this.paymentMethods.forEach(method => console.log(` - ${method.getType()}`));
    }
    getName(): string {
        return this.name;
    }
}
export {Customer}