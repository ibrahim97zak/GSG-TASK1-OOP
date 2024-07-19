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
    rentBuilding(building:Building,rentalPeriod: number, price: number,paymentMethod: PaymentMethod) :void {
        const contract = new Contract(this.name,building.getName(),rentalPeriod,price,paymentMethod);
        building.rent(this.name)
        this.contracts.push(contract);
        console.log(`${this.name} has rented ${building.getName()} from ${building.getOwner()}`);
        
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
}
export {Customer}