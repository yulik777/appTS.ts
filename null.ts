const n: null = null;
// Усли выключить strickNull, null будет присваеваться всем 

interface User3 {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5){ //ecли рандом возвращает < 0.5 
        return null; // ничего не возвращается
    } else { 
        return{
            name: 'Ysik'
        } as User
    } 
}

const userr = getUser();
if (userr)
 {
const nn = userr.name;
}