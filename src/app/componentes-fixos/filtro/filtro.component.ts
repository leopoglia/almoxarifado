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

  classificacoes = [{nome: "Pedro"}, {nome: "João"}, {nome: "Eduarda"}, {nome: "Vytor"}, {nome: "Ester"}, {nome: "Leonardo"}]

}
