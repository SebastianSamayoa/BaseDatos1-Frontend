import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FacturaModel } from '../models/factura.model';
import { map } from 'rxjs/operators';
import { FacturaDetalleModel } from '../models/facturadetalle.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  public url: string;
  public headers;
  constructor(private _http: HttpClient) {
    this.url = 'http://192.168.79.128:8989/factura';
  }

  crearFactura(_factura: FacturaModel) {
    const params = JSON.stringify(_factura);
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this._http.post(this.url + '/crearfactura', params, { headers: this.headers }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  crearDetalleFactura(_detallefactura: FacturaDetalleModel) {
    const params = JSON.stringify(_detallefactura);
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this._http.post(this.url + '/creardetalle', params, {headers: this.headers}).pipe(
      map( (data) => {
        return data;
      })
    );
  }
}
