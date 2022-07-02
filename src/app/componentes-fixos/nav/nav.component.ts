import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    const html = document.querySelector('html');
    const input: HTMLInputElement = document.getElementById('mode') as HTMLInputElement;

    if (localStorage.getItem('mode') == 'darkmode') {
      html.classList.add('darkmode');
      input.checked = true;
    } else {
      localStorage.setItem('mode', 'lightmode');
    }

    if (localStorage.getItem('atual') == '1') {
      document.getElementById('1').classList.add('atual')
    } else if (localStorage.getItem('atual') == '2') {
      document.getElementById('2').classList.add('atual')
    } else if (localStorage.getItem('atual') == '3') {
      document.getElementById('3').classList.add('atual')
    } else if (localStorage.getItem('atual') == '4') {
      document.getElementById('4').classList.add('atual')
    } else if (localStorage.getItem('atual') == '5') {
      document.getElementById('5').classList.add('atual')
    } else if (localStorage.getItem('atual') == '6') {
      document.getElementById('6').classList.add('atual')
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

  visaoGeral() {
    this.route.navigate(['/visaogeral/']);
  }

  inserirReservas() {
    this.route.navigate(['/inserirreserva/']);
  }

  reservas() {
    this.route.navigate(['/reservas/']);
  }

  cadastrarProduto() {
    this.route.navigate(['/cadastrar/produto/']);
  }

  cadastrarUsuario() {
    this.route.navigate(['/cadastrar/usuario/']);
  }

  aceitarUsuarios() {
    this.route.navigate(['/usuario/aceitar/']);
  }

  sair() {
    this.route.navigate(['']);
  }

  menu(){
    let nav:any = document.querySelector("#nav");
    nav.classList.toggle("navaberto")

    let titulo:any = document.querySelectorAll("span.titulo")
    for(let i = 0; i < 7; i++){
      titulo[i].classList.toggle("tituloaberto")
    }
  
    let bola:any = document.querySelector("dd.dark > label > span");
    bola.classList.toggle("bolaaberto")

    let icones:any = document.querySelectorAll("span.material-symbols-outlined")
    for(let i = 0; i < 10; i++){
      icones[i].classList.toggle("iconesaberto")
    }
  }
}
