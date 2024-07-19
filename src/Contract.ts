import { Building } from "./Building/Building";
import { Customer } from "./Customer";
import { PaymentMethod } from "./PaymentMethod/PaymenthMethod";


class Contract{
    constructor(
        private customer: Customer,
        private building: Building,
        private rentalPeriod: number,
        private price: number,
        private paymentMethod: PaymentMethod
    ){}
    displayContract(): void {
        console.log(`Contract: ${this.customer.getName()} has rented ${this.building.getName()} for ${this.rentalPeriod} months at $${this.price} per month.`);
       
    }
    processPayment(): void {
        this.paymentMethod.pay(this.price * this.rentalPeriod);
    }
}
export {Contract}