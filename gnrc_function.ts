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