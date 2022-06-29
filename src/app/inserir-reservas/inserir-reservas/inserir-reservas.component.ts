import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserir-reservas',
  templateUrl: './inserir-reservas.component.html',
  styleUrls: ['./inserir-reservas.component.css']
})
export class InserirReservasComponent implements OnInit {

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
