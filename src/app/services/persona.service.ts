import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import { Persona } from '../models/persona.model';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public url: String;
  public headers;
  constructor(private _http: HttpClient) {
    this.url = 'http://192.168.204.138:8989/';
  }

  getPersona(): Observable<any> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this._http.get<any>(this.url + '/all').pipe(
      map(result => {
        return result;
      })
    );
  }

  crearPersona(_persona: Persona) {
    const json = JSON.stringify(_persona);
    const params = json;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this._http.post(this.url + 'persona/crear', params, { headers: this.headers}).pipe(
      map ((data) => {
        return data;
      })
    );
  }
  crearUsuario(_usuario: UsuarioModel) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._http.post(this.url + 'usuario/crear', JSON.stringify(_usuario), { headers: this.headers }).pipe(
      map((data) => {
        return data;
      })
    );
  }
}


