class Usxer {
    name: string;

    constructor( name: string){
        this.name = name;
    }
}

class Usxers extends Array<Usxer>{// наследуют массив пользователей
searchByName(name: string) {
    return this.filter( u => u.name === name);}

override toString(): string {
    return this.map(u => u.name).join(', ')
   }
}


const usxers = new Usxers();
usxers.push(new Usxer('Vas'));
usxers.push(new Usxer('Max'));
console.log(usxers.toString()); //Vas, Max

//правильная связка юзера и пеймента 
//такая композиция упростит код и уменьшит связанность user payment


