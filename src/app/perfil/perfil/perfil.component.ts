import { Component, OnInit } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';
import { UsuarioComponent } from 'src/app/aceitar-usuarios/usuario/usuario.component';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  usuario = localStorage.getItem('usuario')
  nome = this.usuario.split(" ", 2).toString();
  nomeSobrenome = this.nome.replace(/,/, " ");

  list;
  usuarios;
  imagem = localStorage.getItem("foto");

  ngOnInit() {
    localStorage.setItem('atual', 'perfil')

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }

  }


}
