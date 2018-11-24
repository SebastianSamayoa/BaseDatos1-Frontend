import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoModel } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  public FormularioProducto: FormGroup;
  public ListaProductos: any = [];
  constructor(private _productoService: ProductoService) { }

  ngOnInit() {
    this.FormularioProducto = new FormGroup({
      nombreproducto: new FormControl(),
      precio: new FormControl(),
      cantidad: new FormControl(),
      descripcion: new FormControl(),
      idcategoria: new FormControl(),
      idproveedor: new FormControl()
    });
    this.cargarProductos();
  }

  crearProductos() {
    const producto = new ProductoModel(
      this.FormularioProducto.value.nombreproducto,
      this.FormularioProducto.value.precio,
      this.FormularioProducto.value.cantidad,
      this.FormularioProducto.value.descripcion,
      this.FormularioProducto.value.idcategoria,
      this.FormularioProducto.value.idproveedor
    );
    // console.log(producto);
    this._productoService.crearProducto(producto).subscribe(
      (rest) => {
        this.ListaProductos.push(rest);
      // console.log(rest);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cargarProductos() {
    this._productoService.cargarProductos().subscribe(
      (rest) => {
        this.ListaProductos = rest;
        // console.log(rest);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
