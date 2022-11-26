type A = Awaited<Promise<string>>;
//Awaited -дженерик, куда мы можем передать промис
//В результате А будет string

type A2 = Awaited<Promise<Promise<string>>>;//тоже А2 будет string (расскрутит всю строчку)

//Example

interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return [{name: 'Read', url: 'read'}];
}

type R = Awaited<ReturnType<typeof getMenu>>;

//R - чистое IMenu[] без промисов


//Example 2

async function getArray<T>(x: T) : Promise<Awaited<T>[]>{
    return [await x];   
}

async function getArray2<T>(x: T) : Promise<T[]>{
    return [await x];
}
