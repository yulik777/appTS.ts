class UserMax {
    constructor(public id: number, public name: string) { }
}

function getData(id: number): UserMax{
    return new UserMax(id, "Max");
}

type RT = ReturnType<typeof getData>;
//вытянули тип

//Примеры
type RT3 = ReturnType<<T>() => T>;
type RT4 = ReturnType<<T extends string>() => T>;

type PT = Parameters<typeof getData>[0];
//вытянули параметр

//type first = PT[0];//получили нулевой елемент

type CP = ConstructorParameters<typeof UserMax>;
//получаем кортеж (то что нам нужно передать в конструктор, щоб образовался UserMax)