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
  primeiroNome = this.usuario.split(" ", 2);

  ngOnInit() {
    localStorage.setItem('atual', 'perfil')
  }


}
