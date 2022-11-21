interface UserUlik {
    name: string;
    age?: number;
    email: string;
}

type partial = Partial<UserUlik>; //все свойства не обязательны
type required = Required<UserUlik>; //все свойства обязательны
type readonly = Readonly<UserUlik>;

type requiredAndReadonly = Required<Readonly<UserUlik>>;//и обязательный и для чтения