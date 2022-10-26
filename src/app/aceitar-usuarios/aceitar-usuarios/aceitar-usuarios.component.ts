import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceitar-usuarios',
  templateUrl: './aceitar-usuarios.component.html',
  styleUrls: ['./aceitar-usuarios.component.css']
})
export class AceitarUsuariosComponent implements OnInit {

  buscaInput: string = '';

  constructor() { }


  ngOnInit() {
    localStorage.setItem('atual', '6');

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }

  inputInformacoes($event) {
    this.buscaInput = $event;

  }

}
