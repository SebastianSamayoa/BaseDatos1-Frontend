import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SesionModel } from '../models/sesion.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  public url = 'http://192.168.79.128:8989/usuario';
  public headres: HttpHeaders;
  public DatosUsuario: any;
  constructor(private _http: HttpClient) { }

  iniciandoSesion(_sesion: SesionModel) {
    this.headres = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const json = JSON.stringify(_sesion);
    return this._http.post(this.url + '/sesion', json, { headers: this.headres }).pipe(
      map((data) => {
        console.log(data);
        return data;
      })
    );
  }

  GuardandoDatos(data) {
    localStorage.setItem('datos', JSON.stringify(data));
  }

  FinalizarSesion() {
    localStorage.removeItem('datos');
  }
}
