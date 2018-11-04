import { Component, OnInit } from '@angular/core';
import { SesionService } from '../services/sesion.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SesionModel } from '../models/sesion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  Formulario: FormGroup;
  constructor(private _sesion: SesionService, private _router: Router) { }

  ngOnInit() {
    this.Formulario = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl()
    });
  }

  CreandoSesion() {
    const sesion = new SesionModel(
      this.Formulario.value.usuario,
      this.Formulario.value.contrasena
    );
    // console.log(sesion);
    this._sesion.iniciandoSesion(sesion).subscribe(
      (res) => {
        // console.log(res);
        const datos: any = res;
        if (datos.Ingresa === true) {
          this._router.navigate(['/dashboard']);
          this.Formulario.reset();
        } else {
          this._router.navigate(['/login']);
        }
      },
      (error) => { console.log(error); }
    );
  }
}
