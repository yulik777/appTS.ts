class UserBB {
    name: string;

    constructor(name: string){
    this.name = name;
    }
}

const uuser = new UserBB('Yulik');
console.log(uuser);
uuser.name = 'yulia'; // присвоили новое имя
console.log(uuser);

class Adminn {
role!: number; //!: - так надо 
}

const adminn = new Adminn();
adminn.role = 1;

//Конструктор

class User6 {
    name!: string;
    age!: number;

constructor();
constructor(name: string);
constructor(age: number);

constructor(Ageorname?: string | number){
    if(typeof Ageorname === 'string'){
    this.name = Ageorname;
    } else if
    (typeof Ageorname === 'number')
    this.age = Ageorname;
}
}

const user6 = new User6('Yulik');

