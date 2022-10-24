class UserMik {
    _login: string;
    password: string;
    createdAt: Date;

    set login(l: string) { //setter - присвоение свойств
        this._login = 'user-' + l; //добавляем приставку к логину 'user-' 
         this.createdAt = new Date;
    }
 
     get login(){ // геттер - получить свойство
return  this._login;
     }
}

// async getPassword (p: string) {

// }

const userMik = new UserMik();
userMik.login = 'myLogin';
console.log(userMik); // user - myLogin
console.log(userMik.login); // no login