import { Component, OnInit } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';
import { UsuarioComponent } from 'src/app/aceitar-usuarios/usuario/usuario.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  usuario = localStorage.getItem('usuario')
  nome = this.usuario.split(" ", 2).toString();
  nomeSobrenome = this.nome.replace(/,/, " ");

  ngOnInit() {
    localStorage.setItem('atual', 'perfil')
  }


}
