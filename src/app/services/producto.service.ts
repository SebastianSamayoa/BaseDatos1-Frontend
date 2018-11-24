import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductoModel } from '../models/producto.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private headers: HttpHeaders;
  private url = 'http://192.168.79.128:8989/producto';
  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  crearProducto(_producto: ProductoModel) {
    const params = JSON.stringify(_producto);
    return this._http.post(this.url + '/crearproducto', params, { headers: this.headers }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  cargarProductos() {
    return this._http.get(this.url + '/productostodos').pipe(
      map((data) => {
        return data;
      })
    );
  }
}
