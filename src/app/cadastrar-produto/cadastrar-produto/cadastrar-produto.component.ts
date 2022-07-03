import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem('atual', '4');

    if(localStorage.getItem('menu') == 'aberto'){
      localStorage.setItem('menu', 'abrir')
    }
  }
}
