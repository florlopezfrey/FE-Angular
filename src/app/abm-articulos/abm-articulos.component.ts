import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abm-articulos',
  templateUrl: './abm-articulos.component.html',
  styleUrls: ['./abm-articulos.component.css']
})
export class AbmArticulosComponent implements OnInit {

  art = {
    codigo: null,
    descripcion: null,
    precio: null
  };

  articulos = [{codigo: 1, descripcion: 'art 1', precio: 10.55},
               {codigo: 2, descripcion: 'art 2', precio: 12.10},
               {codigo: 3, descripcion: 'art 3', precio: 52.30},
               {codigo: 4, descripcion: 'art 4', precio: 17},
               {codigo: 5, descripcion: 'art 5', precio: 20},
               {codigo: 6, descripcion: 'art 6', precio: 11},
              ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  borrar(art) {
    for (let x = 0; x < this.articulos.length; x++) {
      if (this.articulos[x].codigo === art.codigo)
      // tslint:disable-next-line: one-line
      {
        this.articulos.splice(x, 1); // la X es la posició en la que me posiciono y el 1 es la cant de elementos que voy a borrar
        return;
      }
    }
  }

  agregar() {
    // tslint:disable-next-line: prefer-for-of
    for (let x = 0; x < this.articulos.length; x++) {
      if (this.articulos[x].codigo === this.art.codigo)
      // tslint:disable-next-line: one-line
      {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    }
    this.articulos.push({codigo: this.art.codigo,
                         descripcion: this.art.descripcion,
                         precio: this.art.precio });
    // estos null son para borrar todos los 'input' del formulario
    this.art.codigo = null;
    this.art.descripcion = null;
    this.art.precio = null;
  }

  seleccionar(art) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  modificar() {
    // tslint:disable-next-line: prefer-for-of
    for (let x = 0; x < this.articulos.length; x++) {
      if (this.articulos[x].codigo === this.art.codigo)
      // tslint:disable-next-line: one-line
      {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }
    }
    alert('No existe el código de articulo ingresado');
  }

  ngOnInit(): void {
  }

}
