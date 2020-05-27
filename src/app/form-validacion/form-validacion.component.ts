import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validacion',
  templateUrl: './form-validacion.component.html',
  styleUrls: ['./form-validacion.component.css']
})
export class FormValidacionComponent implements OnInit {
  tieneError = false;

  usuario = {
    username: null,
    email: null,
    password: null,
    password_confirmation: null,
    provincia: null,
  };

  usuarios = [
    {username: 'Flor', email: 'aa@aaa.com', password: '1234', password_confirmation: '1234', provincia: 'Barcelona'}
  ];

  agregar() {
    if (this.usuario.username == null) {
      alert('falta un username');
      this.tieneError = true;
      return;
    }

    // tslint:disable-next-line: prefer-for-of
    for (let x = 0; x < this.usuarios.length; x++) {
      if (this.usuarios[x].email === this.usuario.email)
      // tslint:disable-next-line: one-line
      {
        alert('ya existe un usuario con dicho email');
        return;
      }
    }
    this.usuarios.push({username: this.usuario.username,
                        email: this.usuario.email,
                        password: this.usuario.password,
                        password_confirmation: this.usuario.password_confirmation,
                        provincia: this.usuario.provincia });
    // estos null son para borrar todos los 'input' del formulario
    this.usuario.username = null;
    this.usuario.email = null;
    this.usuario.password = null;
    this.usuario.password_confirmation = null;
    this.usuario.provincia = null;
  }

  validate() {
    console.log(this.usuario.username);

  }

  ngOnInit(): void {

  }

}
