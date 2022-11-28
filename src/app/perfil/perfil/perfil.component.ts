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

  usuario = localStorage.getItem('idUsuario')
  nome = "";
  nomeSobrenome = "";
  list;
  usuarios;
  imagem;
  email;

  ngOnInit() {
    this.usuarioService.buscarUsuario(this.usuario).then((resultado) => {
      this.usuarios = resultado;
      this.nome = this.usuarios.nome.split(" ", 2).toString();
      this.nomeSobrenome = this.nome.replace(/,/, " ");
      this.imagem = 'data:image/png;base64,' + this.usuarios.imagem.dados;
      this.email = this.usuarios.email;
    }).catch((erro) => {
      console.log(erro);
    })

    localStorage.setItem('atual', 'perfil')

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }

  }


}
