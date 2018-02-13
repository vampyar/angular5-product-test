export class ProductItem {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public inCart: boolean
    ) {}
}
