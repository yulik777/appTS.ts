const num: Array<number> = [1, 2, 3];
//Array<number> generic - массив number

async function testt () {
  const a = await new Promise<number>  ((resolve,reject)=>
  {//дженерик <number>  дает дополнит информацию
    resolve(1);
  });
}

const check: Record<string, boolean> = { // в  Record можна записать 2 джененрика: ключ и значение
    drive: true,
    kpp: false
};
