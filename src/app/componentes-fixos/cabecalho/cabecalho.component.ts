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


  ngOnInit() {
    if (localStorage.getItem('atual') == '1') {
      this.local = 'Visão Geral';
    } else if (localStorage.getItem('atual') == '3') {
      this.local = 'Reservas'
    } else if (localStorage.getItem('atual') == '6') {
      this.local = 'Aceitar usuários'
    }
  }



  situacaofiltro = false;
  alteraTabela: boolean = true;
  local;

  filtro() {
    if (this.situacaofiltro == true) {
      this.situacaofiltro = false;
    } else {
      this.situacaofiltro = true;
    }
  }


  alterarTabela() {
    console.log(this.alteraTabela)

    this.alteraTabela = !this.alteraTabela;
    this.posicaoTabelas.emit(this.alteraTabela);
  }


  inserirReserva() {
    this.route.navigate(['/inserirreserva'])
  }
}
