function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

const ress = logMiddleware<number> (10);

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2; //получаем пол масива 
    return data.splice(0, 1); // делим пополам
}
getSplitedHalf<number>([1, 3, 4]);

// Function которая принимает тип и возвращает сроку

function toString<T>(data: T): string | undefined{
if (Array.isArray(data)) {
    return data.toString();
}
switch (typeof data){
    case 'string':
        return data;
        case 'number':
        case'symbol':
        case'bigint':
        case 'boolean':
        case 'function':
            return data.toString();
    case 'object':
        return JSON.stringify(data);
    default:
        return undefined;       
}
}
console.log(toString(3));
console.log(toString(true));
console.log(toString(['a', 'b']));
console.log(toString({a: 1}));