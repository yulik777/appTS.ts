type htttMethod = 'post' | 'get';
type coolString = string // mozno pedat vsem string 

function fetchWithAuth(url: string, method: htttMethod) {//literalno zapisali 'post' ili 'get'
return 1;
}

fetchWithAuth('s',"post");

//tipizacia objecta alias

type User = {
    name: string,
    age: number,
    skills: string[]
}
 type Role = {
 id: number
 }

 type UserWithRole = User & Role; //obedenjaem user i role
 //ili tak
 //user: User,
 // Role

let users: UserWithRole = {
    name: 'asjh',
    age: 33,
    skills:['jump' , 'swim'],
    id: 1
};