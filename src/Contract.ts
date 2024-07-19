import { PaymentMethod } from "./PaymentMethod/PaymenthMethod";


class Contract{
    constructor(
        private customerName: string,
        private buildingName: string,
        private rentalPeriod: number,
        private price: number,
        private paymentMethod: PaymentMethod
    ){}
    displayContract(): void {
        console.log(`Contract: ${this.customerName} has rented ${this.buildingName} for ${this.rentalPeriod} months at $${this.price} per month.`);
       
    }
    processPayment(): void {
        this.paymentMethod.pay(this.price * this.rentalPeriod);
    }
}
export {Contract}