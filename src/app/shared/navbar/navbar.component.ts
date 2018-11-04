import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _sesion: SesionService, private _router: Router) { }

  ngOnInit() {
  }

  FinalizarSesion() {
    this._sesion.FinalizarSesion();
    this._router.navigate(['/login']);
  }
}
