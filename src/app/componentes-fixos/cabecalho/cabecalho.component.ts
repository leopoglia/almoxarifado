import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('atual') == '1'){
      this.local = 'Visão Geral';
    }else if(localStorage.getItem('atual') == '3'){
      this.local = 'Reservas'
    }else if(localStorage.getItem('atual') == '6'){
      this.local = 'Aceitar usuários'
    }
  }

  situacaofiltro = false;
  local;

  filtro(){
    if(this.situacaofiltro == true){
      this.situacaofiltro = false;
    }else{
      this.situacaofiltro = true;
    }
  }
}
