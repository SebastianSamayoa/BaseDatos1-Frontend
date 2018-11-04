export class UsuarioModel {

    constructor (
        public usuario: string,
        public contrasena: string,
        public rol: string,
        public idpersona: number
    ) {}
}
