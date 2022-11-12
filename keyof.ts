interface IYulik {
    name: string;
    age: number;
}

type KeysOfYulik = keyof IYulik; //keyof -вытаскивает ключи
const key: KeysOfYulik = 'age'; //вытянули ключ


//Example
function getValue<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

const usier: IYulik = {
    name: 'Yulik',
    age: 10
};

const usierName = getValue(usier, 'name');