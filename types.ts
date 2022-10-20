function getFullName(userEntity: {firstname: string, surname: string}) : string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
//const getFullNameArrow  = (firstname: string, surname: string) : string  => {
 //   return `${firstname} ${surname}`;} strelochnaya func

const user = {
    firstname: 'Yulia',
    surname: 'Sk',
    city: 'Kyiv',
    age: 33,
    skills:{
        dev: true,
        devops: true
    }
};
console.log (getFullName(user));