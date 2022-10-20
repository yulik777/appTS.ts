interface User2 {
    login: string;
    password?: string | undefined;
    //optional - moget bit mozet ne bit
}

const user2: User2 = {
    login: 'a@a.com',
    password: '1'
}

function multiply(first: number, second?: number): number {
    if  (!second) {   // esli net second(! - net)
   return first * first }
return first * second;
}
multiply(5);
// esli napisat second: number = 5 - nj eto budet deaultnoe znachenie

interface UserPro{
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    };
}

    function  testPass(User2: UserPro) {
        const t = User2.password?.type;
// const t = user.password ? user.pasword.type : undefined
// проверка пароля =  если есть пароль ? берем тип пароля :(усли нет) возвращаем undefined
    }
//const t = User2.password!.type; !. - passsword tocno budet

function test (param?: string){
const t = param ?? multiply (5);
//esli param null ili underfined ?? 
}