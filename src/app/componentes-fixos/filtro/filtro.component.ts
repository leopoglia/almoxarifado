import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

  @Output() fechou = new EventEmitter();

  classificacoesProdutos = [{ nome: "Com estoque" }, { nome: "Sem estoque" }, { nome: "Descartável" }, { nome: "Materias eletricos" }, { nome: "Materias de limpeza" }]
  classificacoesReservas = [{ nome: "Descartável" }, { nome: "Materias eletricos" }, { nome: "Materias de limpeza" }, { nome: "Concluídas" }, { nome: "Canceladas" }, { nome: "Em andamento" }]
  classificacoesUsuarios = [{ nome: "Professor" }, { nome: "Assistente" }, { nome: "Atendente" }, { nome: "Aceitos" }, { nome: "Recusados" }]

  urlAtual = window.location.pathname;

  situacaofiltro = true;

  filtro() {
    if (this.situacaofiltro == true) {
      this.situacaofiltro = false;
      this.fechou.emit();
    }
  }

}
