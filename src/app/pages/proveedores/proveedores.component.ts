import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ProveedorModel } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: []
})
export class ProveedoresComponent implements OnInit {

  public FormularioProveedor: FormGroup;
  public ListaProveedores: any = [];
  constructor( private _proveedor: ProveedorService) { }

  ngOnInit() {
    this.FormularioProveedor = new FormGroup({
      sociedad: new FormControl(),
      comercial: new FormControl(),
      nit: new FormControl(),
      idtelefono: new FormControl(),
      iddireccion: new FormControl()
    });
    this.cargarProveedores();
  }

  crearProveedor() {
    const proveedor = new ProveedorModel(
      this.FormularioProveedor.value.sociedad,
      this.FormularioProveedor.value.comercial,
      this.FormularioProveedor.value.nit,
      this.FormularioProveedor.value.iddireccion,
      this.FormularioProveedor.value.idtelefono
    );
    this._proveedor.crearProveedor(proveedor).subscribe(
      (res) => {
        this.cargarProveedores();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  cargarProveedores(){
    this._proveedor.cargarProveedores().subscribe(
      (res)=>{
        this.ListaProveedores = res;
        // console.log(this.ListaProveedores);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
