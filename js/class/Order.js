export default class Order{
    constructor(name,quantity,price,size){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.size = size;
        this.finalPrice = price * quantity;
    }
}