let strOrNumber: string | number;

if (Math.random() > 0.5) {
    strOrNumber = 5; //number
} else {
    strOrNumber = 'str'; //string
}

if (typeof strOrNumber === 'string') {
    console.log(strOrNumber);
} else {
    console.log(strOrNumber);
}

let strOrNumber2: typeof strOrNumber;

const Tanya = {
    name:'Tanya'
};

 type keyOfTanya = keyof typeof Tanya; // вытянули ключ и тип Тани 

enum Directioon {
    Up,
    Down
}

type dir = keyof typeof Directioon;