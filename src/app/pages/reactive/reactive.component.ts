import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;
  alert: boolean = false;

  constructor( private fb: FormBuilder) {  // el form builder es un servicio que ayuda a la creación de formularios
    this.createForm(); // lo inicio aquí porque lo neceitaré creado para cuando cargue la página
  }

  ngOnInit(): void {
  }

  get habilidades() {
    return this.forma.get('habilidades') as FormArray;
  }

  getNoValido(campo) {
    return this.forma.get(campo).invalid && this.forma.get(campo).touched;
  }

  createForm() {
    this.forma = this.fb.group({ // el .group es un objeto donde yo determinaré qué lo compone
      // en cada corchete, la 1a posición hace referencia al contenido por defecto que tendrá el campo (los ''), la 2da a las validaciones síncronas y la 3a a las asíncronas
      // Validators.required es un servicio de Angular para los campos obligatorios
      nombre: ['', [Validators.required, Validators.minLength(5)] ],
      apellido: ['', [Validators.required, Validators.minLength(5)] ],
      email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
      direccion: this.fb.group({ // creo un nuevo group para cada form-group que necesite en el formulario
        localidad: ['', Validators.required,],
        ciudad: ['', Validators.required,]
      }),
      habilidades: this.fb.array([ [''] ]) // los corchetes externos indican que es un array. Los corchetes internos son para que por defecto cargue 1 input
    });
  }

  addSkill() {
    this.habilidades.push(this.fb.control('', Validators.required));
  }

  removeSkill(i: number) {
    if (this.habilidades.length > 1) {
      this.habilidades.removeAt(i);
    } else {
      this.habilidades.reset();
    }
  }

  submitForm() {
    // si hay algo inválido, que lo muestre
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control => {

        // este IF es necesario para que entre al formgroup, porque sino no marca como untouched los campos de la dirección
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => {
            control.markAsTouched();
          });
        } else {
          control.markAsTouched();
        }

      });
    }

    // reset form on submit
    if (!this.forma.invalid) {
      this.forma.reset();
      this.alert = true;
    }
  }

  closeAlert() {
    this.alert=false;
  }


}
