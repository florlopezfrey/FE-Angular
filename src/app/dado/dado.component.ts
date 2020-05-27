import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  valor:any = '?';
  numUser = 0;
  alert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  numeroRandom(numeroUser: string) {
    this.valor = Math.floor((Math.random() * 10) + 1);
    if (numeroUser) {
      this.numUser = parseInt(numeroUser);
      if (this.numUser == this.valor) {
        this.alert = true;
      }
    }
  }


  addHero(numeroUser: string) {
    if (numeroUser) {
      this.numUser = parseInt(numeroUser);
    }


  }

  closeAlert() {
    this.alert=false;
  }

}
