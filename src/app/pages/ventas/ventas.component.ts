import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FacturaService } from 'src/app/services/factura.service';
import { FacturaDetalleModel } from 'src/app/models/facturadetalle.model';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { FacturaModel } from 'src/app/models/factura.model';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: []
})
export class VentasComponent implements OnInit {

  public FormularioCliente: FormGroup;
  public FormularioDetalle: FormGroup;

  public DetalleFact: any = [];

  constructor(private _facturaservice: FacturaService, private _clienteservice: ClienteService) { }

  ngOnInit() {
    this.FormularioCliente = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      nit: new FormControl(),
      iddireccion: new FormControl()
    });

    this.FormularioDetalle = new FormGroup({
      idproducto: new FormControl(),
      cantidad: new FormControl(),
      subtotal: new FormControl()
    });

  }

  agregarProducto() {
    const detFact = new FacturaDetalleModel(
      1,
      this.FormularioDetalle.value.idproducto,
      this.FormularioDetalle.value.cantidad,
      this.FormularioDetalle.value.subtotal
    );
    this.DetalleFact.push(detFact);
    this.FormularioDetalle.reset();
  }

  crearFactura() {
    const cliente = new ClienteModel(
      this.FormularioCliente.value.nombres,
      this.FormularioCliente.value.apellidos,
      this.FormularioCliente.value.nit,
      this.FormularioCliente.value.iddireccion
    );
    this._clienteservice.crearCliente(cliente).subscribe(
      (res) => {
        const cli: any = res;
        const factura = new FacturaModel(
          cli.id
        );
        this._facturaservice.crearFactura(factura).subscribe(
          (rest) => {
            const fact: any = rest;
            this.DetalleFact.forEach(element => {
              const detalle = new FacturaDetalleModel(
                fact.id,
                element.idproducto,
                element.cantidad,
                100
              );
              this._facturaservice.crearDetalleFactura(detalle).subscribe(
                (result) => {
                  console.log("exitoso", result);
                },
                (errores) => {
                  console.log(errores);
                }
              );
            });
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
