import { PaymentMethod } from "./PaymenthMethod";

class MasterCard implements PaymentMethod  {
    constructor(
        private cardNumber: string
    ){}
    pay(amount: number):void{

    }
    getType(): string {
        return 'MasterCard';
    }

}
export {MasterCard}