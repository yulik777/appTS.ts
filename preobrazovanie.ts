let dd = 5;
let bb: string = a.toString();
// положили dd в строку bb и переобразовали в строку

let ff: string = new String(dd).valueOf();
// valueOf() - вытягиваем значение string с обьекта new String

let ee: boolean = new Boolean(dd).valueOf();
// вытягиваем булевое значение с обьекта

let vv = 'ggg';
let d: number = +vv;
// преобразовали строку в число с помощью + 
let dm: number = parseInt(vv);
//ili tak 

interface User4 {
    name: string;
    email: string;
    login: string;
}
const useer: User4 = {
name: 'Nuna',
email: 'nuna@n.com',
login: 'nuna'
}
// identichnaya zapis
// const useer = {
//     name: 'Nuna',
//     email: 'nuna@n.com',
//     login: 'nuna'
//     } as User

interface Admin {
    name: string;
    role: number;
}
 const admin: Admin = {
    ...useer,
    // ... - спрэд оператор - помогает взять все свойства обьекта и положить в другой обьект
    role: 1
}

//Правильный пример преобразования одного обьекта к другому
//которое забирает только необходимые обьекты

function userToAdmin(useer: User4): Admin {
    return {
        name: useer.name,
        role: 1
    }
}