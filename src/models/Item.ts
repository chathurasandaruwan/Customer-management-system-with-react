export class Item {
    name: string;
    desc: string;
    price: string;
    qty: string;

    constructor(name: string, desc: string, price: string, qty: string) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.qty = qty;
    }
}