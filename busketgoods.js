"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date);
        this.shopId = shopId;
    }
}
class Busket {
    constructor() {
        this.products = []; // или массив продуктов или нет ничего по умолчанию
    }
    //метод добавления товара в корзину
    addProduct(product) {
        this.products.push(product); // push(product) закидываем товар в корзину
    }
    //метод удаления товара в корзину
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    //получение суммы
    getSum() {
        return this.products
            .map((p) => p.price) // получаем цену
            .reduce((p1, p2) => p1 + p2); //сумма цен
    }
    //задать доставку
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    //проверка перед доставкой
    checkOut() {
        if (this.products.length == 0) { //если в корзине 0 продуктов
            throw new Error(" No products in your Cart");
        }
        if (!this.delivery) { //если не указан способ доставки
            throw new Error(" Не указан способ доставки");
        }
        return { success: true }; // все ок
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
