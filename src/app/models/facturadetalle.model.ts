export class FacturaDetalleModel {
    constructor(
        public idfactura: number = 1,
        public idproducto: number,
        public cantidad: number,
        public subtotal: number
    ) {}
}