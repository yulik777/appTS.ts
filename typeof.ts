let strOrNumber: string | number;

if (Math.random() > 0.5) {
    strOrNumber = 5;
} else {
    strOrNumber = 'str';
}

if (typeof strOrNumber === 'string') {
    console.log(strOrNumber);
} else {
    console.log(strOrNumber);
}

let strOrNumber2: typeof strOrNumber;

p