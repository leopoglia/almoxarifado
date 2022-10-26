import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-aceitar-usuarios',
  templateUrl: './aceitar-usuarios.component.html',
  styleUrls: ['./aceitar-usuarios.component.css']
})
export class AceitarUsuariosComponent implements OnInit, OnChanges {

  buscaInput: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.buscaInput)
  }

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
