import { PaymentMethod } from "./PaymenthMethod";

class VisaCard implements PaymentMethod{
    constructor(private cardNumber : number){}
    pay(amount : number){
        console.log(`Visa Card ${this.cardNumber} paid ${amount}`)
    }
    getType(): string {
        return 'VisaCard';
    }
}
export {VisaCard}