import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const html = document.querySelector('html');

    if (localStorage.getItem('mode') == 'darkmode') {
      html.classList.add('darkmode');
    } else {
      localStorage.setItem('mode', 'lightmode');
    }
  }

  darkmode($event) {
    const html = document.querySelector('html');
    const checkbox = document.querySelector('#mode');

    if (localStorage.getItem('mode') == 'lightmode') {
      localStorage.setItem('mode', 'darkmode');
    } else {
      localStorage.setItem('mode', 'lightmode');
    }
    document.querySelector('html').classList.toggle('darkmode');
  }
}
