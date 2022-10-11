import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})

export class CabecalhoComponent implements OnInit {



  constructor(private route: Router) { }

  @Output() posicaoTabelas = new EventEmitter();
  @Output() ordenardarTabela = new EventEmitter();


  ngOnInit() {
    if (localStorage.getItem('atual') == '1') {
      this.local = 'Visão Geral';
      this.visaogeral = true;
    } else if (localStorage.getItem('atual') == '3') {
      this.local = 'Reservas'
    } else if (localStorage.getItem('atual') == '6') {
      this.local = 'Aceitar usuários'
    }
  }

  situacaofiltro = false;
  alteraTabela: boolean = true;
  ordernaTabela: boolean = false;
  visaogeral: boolean = false;
  local;
  urlAtual = window.location.pathname;

  filtro() {
    if (this.situacaofiltro == true) {
      this.situacaofiltro = false;
    } else {
      this.situacaofiltro = true;
    }
  }

  ordenar(){
    this.ordernaTabela = !this.ordernaTabela;
    this.ordenardarTabela.emit(this.ordernaTabela);
  }

  fechou() {
    this.filtro();
  }

  alterarTabela() {
    this.alteraTabela = !this.alteraTabela;
    this.posicaoTabelas.emit(this.alteraTabela);
  }

  inserirReserva() {
    this.route.navigate(['/inserirreserva'])
  }
}