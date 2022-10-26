class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number
    )
    {}  
}

class Delivery {
    constructor(
        public date: Date
    ) {}
}

class HomeDelivery extends Delivery {
    constructor( date: Date, public address: string) {
        super(date);
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date);
    }
}

type DeliveryOptions =  HomeDelivery | ShopDelivery;

class Busket {
    private products: Product[] = []; // или массив продуктов или нет ничего по умолчанию
    private delivery: DeliveryOptions;

    //метод добавления товара в корзину
    public addProduct (product: Product): void {
    this.products.push(product); // push(product) закидываем товар в корзину
    }

    //метод удаления товара в корзину
    public deleteProduct (productId: number): void{
     this.products = this.products.filter((p: Product) => p.id !== productId);
        }

    //получение суммы
    public getSum(): number {
        return this.products 
        .map((p: Product) => p.price)  // получаем цену
        .reduce((p1: number, p2: number) => p1 + p2); //сумма цен
    }


//задать доставку
public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
}

//проверка перед доставкой
public checkOut(){
    if ( this.products.length == 0) { //если в корзине 0 продуктов
     throw new Error (" No products in your Cart");
    }
    if ( !this.delivery) { //если не указан способ доставки
        throw new Error (" Не указан способ доставки");
}
return {success: true}; // все ок
}
}
 
//Тестируем


const busket = new Busket();

//добавляем продукты
busket.addProduct(new Product(1, 'Chips', 10));
busket.addProduct(new Product(1, 'Chocolate', 10));
busket.addProduct(new Product(1, 'Fish', 10));

//удаляем рыбу
busket.deleteProduct(1);
//доставка
busket.setDelivery(new HomeDelivery(new Date(), 'Dudnuk street,10'));
//проверка удален ли рыба по сумме
console.log(busket.getSum());
console.log(busket.checkOut());