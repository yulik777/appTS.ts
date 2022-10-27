class Paymeent {
    private date: Date = new Date();

    getDate(this: Paymeent){
      return this.date;
    }


getDateArrow = () => {
    return this.date;
}
}
    const p = new Paymeent();

    const use8r = {
        id: 1,
        paymentDate: p.getDate.bind(p),
        paymentDateArrow: p.getDateArrow
    }


console.log(p.getDate()); //22/10/22
console.log(use8r.paymentDate());//22/10/22
console.log(use8r.paymentDateArrow());

class PaymeentPersistent extends Paymeent {
    save() {
        return this.getDate(); // super - обращаемся к родителю Зфньуууте
    }
}

console.log(new PaymeentPersistent().save()); // 22.10.22


//Типизация this 

class UserBuilder {
    name: string;

    setName(name: string) : this {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder { // проверка что это Админбилдер
        return this instanceof AdminBuilder;
    }
}

    class AdminBuilder extends UserBuilder {
        roles: string[];
    }


const resultt = new UserBuilder().setName('Valya');
const resultt2 = new AdminBuilder().setName('Valya');

let anna: UserBuilder | AdminBuilder = new UserBuilder;

if (anna.isAdmin()) {
    console.log(anna);
} else {
    console.log (anna)
}