interface PaymentMethod{
    pay(amount:number):void;
    getType(): string;
}
export {PaymentMethod}