function loginId(id: string | number): void {
    console.log(id);
}
// void - nichego ne vozvrachaet

const j = loginId(1);

function multipl1 (f: number, s?: number) {
    if (!s) {
        return f*f;
    }
}
type voidFunc = () => void;

const f1: voidFunc = () => {}
const f2: voidFunc = () => {
    return true
}
const b = f2(); // nichego ne vernet

const sk1lls = ['Dev' , 'DevOps']

const userV = {
    s: ['s']
}
sk1lls.forEach((sk1ll) => userV.s.push(sk1ll));