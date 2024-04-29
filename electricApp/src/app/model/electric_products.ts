export class ElectricProduct {
    public id?: number;
    public productName?: String;
    public productCost?: number;
    public productColour?: string;

    constructor(id?: number, productName?: String, productCost?: number, productColour?: string) {
        this.id = id;
        this.productName = productName;
        this.productCost = productCost;
        this.productColour = productColour;

    }
}