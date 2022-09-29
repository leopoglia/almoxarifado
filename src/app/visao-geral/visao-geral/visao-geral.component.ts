import { Component, OnInit, ComponentFactoryResolver, Input } from '@angular/core';
import { NavComponent } from 'src/app/componentes-fixos/nav/nav.component';

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }


  ngOnInit() {
    localStorage.setItem('atual', '1');

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }

  posicao = true;
  item: any = document.querySelector("posicao");
  tabelaOrdenada = false;

  receberPedido($event) {
    this.posicao = $event;

    if(this.posicao){

    }
  }

  ordernarTabela($event) {
    this.tabelaOrdenada = $event;
  }
}