interface User5 {
    name: string;
    email: string;
    login: string;
}

const usser: User5 = {
    name: 'Nuna',
    email: 'nuna@n.com',
    login: 'nuna'
    }

    interface Admin1 {
        name: string;
        role: number;
    }
   // Новый пример ypeGuard(проверяем есть ли юзер админом)

   function isAdmin (usser: User5 | Admin1): usser is Admin {
    return 'role' in usser;
}
function setRoleZero(usser: User5 | Admin1) {
    if (isAdmin(usser)) {
        usser.role = 0;
    } else {
        throw new Error('Пользователь не админ');
    }
}


    function loggId(id: string | number) {
        //нужен idб он будет либо стринг либо нимбер
        if (typeof id === 'string') {
            // typeof(сужает тип) указывает что это будет имнно строка
            console.log(id);
            // точно будет строка в консоле
        } else {
            console.log(id);
            //id в консоле будет number
        }
    }
    
   //typeGuard
    function isString(x: string | number): x is string {
        // x is string - проверили, что х строка из двух типов string | number)
    return typeof x ===  'string';
    // если х вернется string, то это стринг
    }

    //Теперь заменяем строчку(39 вместо 20)
    function looggId(id: string | number) {
        if (isString(id)) {
            console.log(id);
        } else {
            console.log(id);
        }
    }

