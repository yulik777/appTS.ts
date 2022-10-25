class Car {
   public marka: string; //make -публично и доступно для изменений
   private damages: string; //доступно внутри
   private _model: string;
   protected run: number;
   #price: number; //тоже приватное свойство

   set model(m: string) {
    this._model = m;
   }

   get model() {
    return this._model;
   }

   isPriceEquel(c: Car) {
    return this.#price === this.#price;
   } //проверка равна ли цена 

   addDamage(damage: string) {
    this.damages.includes(damage);
   }
}

class EuroTruck extends Car {
    setRun(km: number){
        this.run = km / 0.50;
    }
}

new Car();
new EuroTruck();