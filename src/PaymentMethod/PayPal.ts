import { PaymentMethod } from "./PaymenthMethod";

class PayPal implements PaymentMethod{
    constructor(
        private email: string,
    ){}
    pay(amount: number):void{
        console.log(`paid using PayPal to ${this.email} and the amont is = ${amount}`)
    }
    getType(): string {
        return 'PayPal';
    }
}
export {PayPal}