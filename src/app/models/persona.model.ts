export class Persona {
    constructor(
        public dpi: String,
        public pnombre: String,
        public snombre: String,
        public tnombre: String = "",
        public papellido: String,
        public sapellido: String,
        public capellido: String = "",
        public nit: String,
        public nacionalidad: String,
        public idtelefono: Number,
        public iddireccion: Number
    ) {}
}
