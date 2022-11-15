type Modifier = 'read' | 'update' | 'create';

type UserRolees = {
customers: Modifier,
projects: Modifier,
adminPanel: Modifier,
}
//делаем обьект, еслі есть одін із 
//параметров то он увідіт меню пользователя

type UserAccess11 = {
    customers: boolean,
    projects: boolean,
    adminPanel: boolean, 
}

//делаем с помощью mapped

type ModifierToAccess<Type> = {
    [Property in keyof Type]: boolean;
    //єто значіт что ми берем каждий із ключей і подставляем boolean
}

type UserAccess22 = ModifierToAccess<UserRolees>;