import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FacturaModel } from '../models/factura.model';
import { map } from 'rxjs/operators';
import { FacturaDetalleModel } from '../models/facturadetalle.model';
import { ClienteModel } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  public url: string;
  public headers;
  constructor(private _http: HttpClient) {
    this.url = 'http://192.168.79.128:8989';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  crearFactura(_factura: FacturaModel) {
    const params = JSON.stringify(_factura);
    return this._http.post(this.url + '/factura/crearfactura', params, { headers: this.headers }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  crearDetalleFactura(_detallefactura: FacturaDetalleModel) {
    const params = JSON.stringify(_detallefactura);
    return this._http.post(this.url + '/factura/creardetalle', params, { headers: this.headers }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  crearCliente(_cliente: ClienteModel) {
    const params = JSON.stringify(_cliente);
    return this._http.post(this.url + '/cliente/crearcliente', params, { headers: this.headers }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  obtenerClientes() {
    return this._http.get(this.url + '/cliente/clientetodos', { headers: this.headers }).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
