import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  alerta: boolean = false;
  alertar = "Usuário cadastrado com sucesso!";

  constructor() { }

  ngOnInit() {
    localStorage.setItem('atual', '5');

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }

  cadastrarUsuario() {
    this.alerta = true

    setTimeout(() => {
      this.alerta = false
    }, 1000 * 10);
  }
}
