import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../models/persona.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styles: []
})
export class RegisteredComponent implements OnInit {
  forma: FormGroup;
  constructor( private _persona: PersonaService) {

   }

  ngOnInit() {
    this.forma = new FormGroup({
      pnombre: new FormControl(),
      snombre: new FormControl(),
      papellido: new FormControl(),
      sapellido: new FormControl(),
      nit: new FormControl()
    });
  }

  crearPersona() {
    const persona = new Persona(
      this.forma.value.pnombre, this.forma.value.snombre,
      this.forma.value.papellido, this.forma.value.snombre,
      this.forma.value.nit);
    this._persona.crearUsuario(persona).subscribe(
      res => {
        console.log('Exitoso', res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
