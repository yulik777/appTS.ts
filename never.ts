function generateError(message:string): never{ //nikogda ne budet prisvoeno
    throw new Error(message);// kidaet oshibku s massage
}

function dumpError(): never{
    while(true){}
}

//const a: never = 1; ne mozem prisvoit

