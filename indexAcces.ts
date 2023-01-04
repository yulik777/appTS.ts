interface Role3 {
    name: string;
}
interface Permission {
    endDate: Date;
}

interface User11 {
    name: string;
    roles: Role[];
    permission: Permission;
}

const user11: User11 = {
    name: 'Tini',
    roles: [],
    permission: {
        endDate: new Date()
    }
}

const nameUser = user11['name']; //обращение по индексу
const roleNames = 'roles';


type rolesType = User11['roles'];
type rolesType2 = User11 [typeof roleNames] //если обращаемся череез переменную

//[number] - специальный тип, который говорит что мы хотим получить елемент масива
type roleType = User11['roles'][number];
type DateType = User11['permission']['endDate'];

//переобразовываем в union type

const roless = ['admin', 'user','superuser' ] as const;
type roleTypes = typeof roless[number];