class UserMik {
    _login: string;
    password: string;

    set login(l: string) { //setter - передать свойство
        this._login = 'user-' + 1; //добавляем приставку к логину 'user-' 
    }
 
     get login(){ // геттер - получить свойство
return 'no login';
     }
}

const userMik = new UserMik();
userMik.login = 'myLogin';
console.log(userMik); // user - myLogin
console.log(userMik.login); // no login