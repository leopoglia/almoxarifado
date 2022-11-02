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
    if (localStorage.getItem('menu') == "abrir") {
      this.menu();
    }

    const html = document.querySelector('html');
    const input: HTMLInputElement = document.getElementById('mode') as HTMLInputElement;

    if (localStorage.getItem('mode') == 'darkmode') {
      html.classList.add('darkmode');
      input.checked = true;
    } else {
      localStorage.setItem('mode', 'lightmode');
    }

    if (localStorage.getItem('cargo') == 'Professor') {
      this.usuario = this.professor;
    } else if (localStorage.getItem('cargo') == 'Atendente') {
      this.usuario = this.atendente;
    } else if (localStorage.getItem('cargo') == 'Administrador') {
      this.usuario = this.administrador;
    }

    if (localStorage.getItem('atual') == '1') {
      this.administrador[0].atual = "atual"
      this.atendente[0].atual = "atual"
      this.professor[0].atual = "atual"
    } else if (localStorage.getItem('atual') == '2') {
      this.administrador[1].atual = "atual"
      this.atendente[1].atual = "atual"
      this.professor[1].atual = "atual"
    } else if (localStorage.getItem('atual') == '3') {
      this.administrador[2].atual = "atual"
      this.atendente[2].atual = "atual"
      this.professor[2].atual = "atual"
    } else if (localStorage.getItem('atual') == '4') {
      this.administrador[3].atual = "atual"
      this.atendente[3].atual = "atual"
    } else if (localStorage.getItem('atual') == '5') {
      this.administrador[4].atual = "atual"
    } else if (localStorage.getItem('atual') == '6') {
      this.administrador[5].atual = "atual"
    }
  }


  usuario;
  administrador = [
    { icone: "inventory_2", texto: "Visão geral", link: "/visaogeral", atual: "null" },
    { icone: "add_circle", texto: "Inserir reservas", link: "/cadastrar/reserva", atual: "null" },
    { icone: "calendar_month", texto: "Reservas", link: "/reservas", atual: "null" },
    { icone: "category", texto: "Cadastrar produto", link: "/cadastrar/produto", atual: "null" },
    { icone: "person", texto: "Cadastrar usuário", link: "/cadastrar/usuario", atual: "null" },
    { icone: "check_circle", texto: "Aceitar usuários", link: "/usuario/aceitar", atual: "null" },
  ]

  atendente = [
    { icone: "inventory_2", texto: "Visão geral", link: "/visaogeral", atual: "null" },
    { icone: "add_circle", texto: "Inserir reservas", link: "/cadastrar/reserva", atual: "null" },
    { icone: "calendar_month", texto: "Reservas", link: "/reservas", atual: "null" },
    { icone: "category", texto: "Cadastrar produto", link: "/cadastrar/produto", atual: "null" },
  ]

  professor = [
    { icone: "inventory_2", texto: "Visão geral", link: "/visaogeral", atual: "null" },
    { icone: "add_circle", texto: "Inserir reservas", link: "/cadastrar/reserva", atual: "null" },
    { icone: "calendar_month", texto: "Reservas", link: "/reservas", atual: "null" },
  ]


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

  sair() {
    this.route.navigate(['']);
  }

  menu() {
    if (localStorage.getItem("menu") == "aberto") {
      localStorage.setItem("menu", "fechado")
    } else {
      localStorage.setItem("menu", "aberto")
    }

    let nav: any = document.querySelector("#nav");
    nav.classList.toggle("navaberto")

    let titulo: any = document.querySelectorAll("span.titulo")
    for (let i = 0; i < 7; i++) {
    }

    let bola: any = document.querySelector("dd.dark > label > span");
    bola.classList.toggle("bolaaberto")

    let icones: any = document.querySelectorAll("span.material-symbols-outlined")
    for (let i = 0; i < 10; i++) {
    }

    let botao: any = document.querySelector("#nav > dl > div > div > dd.dark > label")
    botao.classList.toggle("botaoaberto")
  }
}