export class Pizza {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    toString(): string {
        return `Pizza [ID: ${this.id}, Name: ${this.name}]`;
    }
}