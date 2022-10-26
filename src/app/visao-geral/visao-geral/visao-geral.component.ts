import { Component, OnInit, ComponentFactoryResolver, Input } from '@angular/core';

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent implements OnInit {

  posicao = true;
  item: any = document.querySelector("posicao");
  tabelaOrdenada = false;
  buscaInput: string = '';

  ngOnInit() {
    localStorage.setItem('atual', '1');

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }



  receberPedido($event) {
    this.posicao = $event;

    if (this.posicao) {

    }
  }

  ordernarTabela($event) {
    this.tabelaOrdenada = $event;
  }

  inputInformacoes($event) {
    console.log($event);
    this.buscaInput = $event;
  }
}