enum PaymentStatus{
    Holded,
    Processsed,
    Reversed
}

class Payment{
    id: number;
    status: PaymentStatus;
    createdAt!: Date;
    updatedAt!: Date;

    constructor(id: number){
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }

//Method - это действия с обьектом (будем узнавать ск секонд существует платеж)
getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
}

unholdPayment() {
    if (this.status == PaymentStatus.Processsed){
        throw new Error('Payment no return')
    }
    this.status = PaymentStatus.Reversed;
    this.updatedAt = new Date();
}}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);
