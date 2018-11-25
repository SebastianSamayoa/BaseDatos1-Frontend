import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteModel } from '../models/cliente.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private hearders: HttpHeaders;
  private url = 'http://192.168.79.128:8989/cliente';
  constructor(private _http: HttpClient) {
    this.hearders = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  crearCliente(_cliente: ClienteModel) {
    const params = JSON.stringify(_cliente);
    return this._http.post(this.url + '/crearcliente', params, { headers: this.hearders }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  obtenerClientes() {
    return this._http.get(this.url + '/clientestodos').pipe(
      map((data) => {
        return data;
      })
    );
  }
}
