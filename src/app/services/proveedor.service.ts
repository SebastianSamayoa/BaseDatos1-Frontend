import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ProveedorModel } from '../models/proveedor.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private url = 'http://192.168.79.128:8989/proveedor';
  private headers: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  crearProveedor(_proveedor: ProveedorModel) {
    const params = JSON.stringify(_proveedor);
    return this._http.post(this.url + '/crearproveedor', params, { headers: this.headers }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  cargarProveedores() {
    return this._http.get(this.url + '/proveedorestodos').pipe(
      map((data) => {
        return data;
       })
    );
  }
}
