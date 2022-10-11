import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-reserva',
  templateUrl: './produto-reserva.component.html',
  styleUrls: ['./produto-reserva.component.css']
})
export class ProdutoReservaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quantidade = 0;


  menos() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }

  mais() {
    this.quantidade++;
  }

}
