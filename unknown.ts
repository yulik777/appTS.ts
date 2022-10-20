let input: unknown; // ne znaem chto priydet, no neobhodimo opredelit

input = 3;
input = ['sf', 'dsf'];

let res1: any = input;

function run(i: unknown) {
    if(typeof i == 'number'){
        i++;
    } else {
        i
    }  
}
run (input);

//Проверки

async function getData(){
try{
await fetch('');
} catch(error){
if (error instanceof Error){
    console.log(error.message)
}
}}


async function getDataForce(){
    try{
    await fetch('');
    } catch(error){
    const e =  error as Error;
    console.log(e.message);
    }
    }

    type U1 = unknown | null;

    type I1 = unknown & string;