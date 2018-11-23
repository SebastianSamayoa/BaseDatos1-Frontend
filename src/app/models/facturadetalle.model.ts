export class FacturaDetalleModel {
    constructor(
        public idproducto: number,
        public cantidad: number,
        public subtotal: number
    ) {}
}