import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../models/persona.model';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioModel } from '../models/usuario.model';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styles: []
})
export class RegisteredComponent implements OnInit {
  forma: FormGroup;
  constructor(private _persona: PersonaService) {

  }

  ngOnInit() {
    this.forma = new FormGroup({
      dpi: new FormControl(),
      pnombre: new FormControl(),
      snombre: new FormControl(),
      tnombre: new FormControl(),
      papellido: new FormControl(),
      sapellido: new FormControl(),
      capellido: new FormControl(),
      nit: new FormControl(),
      nacionalidad: new FormControl(),
      idtelefono: new FormControl(),
      iddireccion: new FormControl(),
      usuario: new FormControl(),
      contrasena: new FormControl()
    });
  }

  crearPersona() {
    const persona = new Persona(
      this.forma.value.dpi,
      this.forma.value.pnombre, this.forma.value.snombre, this.forma.value.tnombre,
      this.forma.value.papellido, this.forma.value.sapellido, this.forma.value.capellido,
      this.forma.value.nit, this.forma.value.nacionalidad, 
      this.forma.value.idtelefono, this.forma.value.iddireccion);
      const pusuario = this.forma.value.usuario;
      const pcontrasena = this.forma.value.contrasena;
      console.log(pusuario, pcontrasena);
    this._persona.crearPersona(persona)
      .subscribe(
        res => {
          const newpersona: any = res;
          if (newpersona.id !== 0) {
            const user = new UsuarioModel(
              pusuario,
              pcontrasena,
              newpersona.id,
              2
            );
            console.log(user);
            this._persona.crearUsuario(user).subscribe(
              resul => { console.log(resul); },
              error => { console.log(error); }
            );
          }
          console.log('Exitoso', res);
        },
        err => {
          console.log(err);
        }
      );
  }

}
