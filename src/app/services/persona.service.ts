import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public url: String;
  public headers;

  constructor(private _http: HttpClient) {
    this.url = 'http://192.168.204.128:8080/persona';
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

  crearUsuario() {

  }
}
