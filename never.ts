function generateError(message:string): never{ //nikogda ne budet prisvoeno
    throw new Error(message);// kidaet oshibku s massage
}

function dumpError(): never{
    while(true){}
}

//const a: never = 1; ne mozem prisvoit

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction){
    switch (action) {
        case 'refund':
            //....
            break;
            case 'checkout':
                //....
                break;
                case 'reject':
                    //....
                    break; 
                default:
                    const _: never = action; // proverka
                    throw new Error('No such action');
    }
}

