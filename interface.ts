interface User1  {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
}
interface Role1 {
    roleId: number;
}
interface UserWithRole1  extends User1, Role1 {
    createdAt: Date;
}

let user1: UserWithRole1 = {
    name: 'asjh',
    age: 33,
    skills:['jump' , 'swim'],
    roleId: 1,
    createdAt: new Date(),

    log(id) {
        return '';
    }
};

interface UserDic {
    [index: number]: User1
    //neogranichenoe chislo svoysv : user1
}

