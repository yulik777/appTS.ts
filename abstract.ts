abstract class Controller {//абстрактный класс
    abstract handle(req: any): void; // что то задали: нічего не возвращает

//new Controller() - error

handleWithLogs(req: any){
    console.log('Start');
    this.handle(req);
    console.log('End');
}
}
class UserController extends Controller {
    handle(req: any): void {
        console.log(req);
    }
}

const c = new UserController();
c.handleWithLogs('Request');// Start Request End

//Задание абстрактный logger

//1 Создаем абстрактный метод у класса logger

abstract class Loggger {
    abstract log(message: string): void;

//2. Выводим в лог дату

printDate(date: Date) {
    this.log(date.toString());
}
}

//3. класс выводящий дату, а потом сообщение
class MuLogger extends Loggger{
    log(message:string) : void {
        console.log(message);
    }

    logWithDate(message:string){
        this.printDate(new Date());
        this.log(message);
    }
}

const logger = new MuLogger();
logger.logWithDate('Hello');
//22.10.22 "Hello"

