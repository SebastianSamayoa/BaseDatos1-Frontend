export class ProductoModel {
    constructor(
        public nombreproducto: String,
        public precio: String,
        public descripcion: String,
        public idcategoria: Number,
        public idproveedor: Number
    ) {}
}