class UserSefvise {
    static db: any; //можно privat static

static getUser(id: number) {
    return UserSefvise.db.findById(id);
}
create(){
UserSefvise.db;
}

static {
    UserSefvise.db = 'fhnhljf';//запустится сразу
}
}

UserSefvise.db; //можно обращаться без new UserSefvise
const inst = new UserSefvise();
inst.create(); 