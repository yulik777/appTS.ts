const num: Array<number> = [1, 2, 3];
//Array<number> generic - массив number

async function testt () {
  const a = await new Promise<number>  ((resolve,reject)=>
  {//дженерик <number>  дает дополнит информацию
    resolve(1);
  });
}


