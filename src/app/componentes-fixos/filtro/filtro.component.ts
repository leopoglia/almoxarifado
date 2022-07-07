import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  classificacoes = [{nome: "Com estoque"}, {nome: "Sem estoque"}, {nome: "Descartável"}, {nome: "Materias eletricos"}, {nome: "Materias de limpeza"}]


  situacaofiltro = true;

  filtro() {
    if (this.situacaofiltro == true) {
      this.situacaofiltro = false;
    } 
  }
}
