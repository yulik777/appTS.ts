type Constructor = new (...args: any[]) => {}
//дженерик конструктор
type GConstructor<T = {}> = new (...args: any[]) =>T

//пример1

class List {
    constructor (public items: string[]) {}
}
type ListType = GConstructor<List>;

//обычный extend

class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}

//mixin
function ExtendList<TBase extends ListType>(Base: TBase){
    return class ExtendList extends Base{
        first() {
            return this.items[0];   
    }
}
}

const list = ExtendList(List);
const rees = new list(['один', 'два']);
console.log(rees.first()); //один