import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.component.html',
  styleUrls: ['./detalhes-reserva.component.css']
})
export class DetalhesReservaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('menu') == 'aberto'){
      localStorage.setItem('menu', 'abrir')
    }

    if(localStorage.getItem("usuario") == "Administrador" || localStorage.getItem("usuario") == "Atendente"){
      this.permissao = true;
    }
  }

  permissao = false;

  produtos = [1,2,3]

}
