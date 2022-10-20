function logId(id: string | number | boolean) {
    if(typeof id === 'string'){ //runtime proverka, syzhaem do odnogo tipa
    console.log(id);} //string
    else  if (typeof id === 'number'){
        console.log(id); //nu
    } else {
        console.log(id); 
    }
}

function logError (err: string | string[]) {
    if (Array.isArray(err)){ //proverka massive eto ili net
        console.log(err);
    } else {
        console.log(err);
    }
}


function logObject(obj: {a: number} | {b: number}) {
    if ('a' in obj) { //esli v obecte est a
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

function logMultipleIds( a: string | number, b: string|boolean) {
    if (a === b) {

    }
    else { 
        console.log (a);
    }
}

//Literalnie tipu
function fetchWitAuth(url: string, method: 'post' | 'get') {//literalno zapisali 'post' ili 'get'

}
fetchWitAuth('s',"post");

let a: 1 = 1 //literal ctabilno 1