//extends - наследование

type PaymenttStatus = 'new' | 'paid';

class Paymentt{
    id: number;
    status: PaymenttStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay(){
        this.status = 'paid';
    }
}

class PersistedPayment extends Paymentt{
    databaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random();
        super(id);// обращаемся к конструкторуб когда переопределяем конструктор
    }


save() {
    //сохраняет в базу
}

override pay(date?: Date){// override переопредилили метод pay
    super.pay();//вызываем метод исходного класа
    if (date) {
        this.paidAt = date;
    }
}
}

new PersistedPayment();

class UserLik {
    name: string = 'user';
        constructor(){
        console.log(this.name);
    }
}

class AdminLik extends UserLik {
    name: string ='admin';

    constructor(){
        super();
        console.log(this.name);
    }
}

new AdminLik;


//newError('');

class HttpError extends Error{
    code: number;

    constructor (message: string, code?: number) {
        super (message);
        this.code = code ?? 500;
    }
}