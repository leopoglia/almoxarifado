import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuario = localStorage.getItem("idUsuario");
  primeiroNome = this.usuario.split(" ", 1);
  list;
  imagem;

  constructor(private route: Router,
    private usuarioService: UsuariosService) { }

  ngOnInit() {


    this.usuarioService.buscarUsuario(this.usuario).then((resultado) => {
      this.imagem = resultado;
      this.primeiroNome = this.imagem.nome.split(" ", 2).toString();
      this.imagem = 'data:image/png;base64,' + this.imagem.imagem.dados;
    }).catch((erro) => {
      console.log(erro);
    }
    )
  }

  perfil() {
    this.route.navigate(['/perfil'])
  }

}
