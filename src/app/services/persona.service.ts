import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public url: String;
  public headers;

  constructor(private _http: HttpClient) {
    this.url = 'http://192.168.204.136:8989/persona';
  }

  getPersona(): Observable<any> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this._http.get<any>(this.url + '/all').pipe(
      map( result => {
        return result;
      })
    );
  }

  crearUsuario(_persona: Persona) {
    const json = JSON.stringify(_persona);
    const params = json;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this._http.post(this.url + '/crear', params, { headers: this.headers}).pipe(
      map ((data) => {
        return data;
      })
    );
  }
}
