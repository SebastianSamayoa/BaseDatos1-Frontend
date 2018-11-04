import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  public DatosSesion: any;
  constructor(public _router: Router) {
    if (localStorage.getItem('datos') === null) {
      this._router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.DatosSesion = JSON.parse(localStorage.getItem('datos'));
  }

}
