export class UsuarioModel {

    constructor (
        public usuario: string,
        public contrasena: string,
        public idpersona: number,
        public idrol: number = 1,
    ) {}
}
