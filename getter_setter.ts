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



//Implements

interface ILogger{
    log(...args: any[]):void;//принимает аргументы  : и ничего не возвращает
     error(...args: any[]): void;
}

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log(...args);
    }
   async  error(...args: any[]): Promise<void> {
        throw new Error("Method not implemented.");
    }
    }
    
    interface IPayable {
        pay(paymentId: number): void;
        price?: number;
    }
  interface IDeletable{
    delete(): void;
  }
    class UserBin implements IPayable, IDeletable{
        delete(): void {
            throw new Error("Method not implemented.");
        }
        pay(paymentId: number): void {
            ///;
        }
        price?: number | undefined;
        
    }
