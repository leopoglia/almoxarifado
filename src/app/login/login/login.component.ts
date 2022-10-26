import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router,
    private usuarioService: UsuariosService) { }

  usuario: string = '';
  senha: string = '';
  visualizacao: boolean = false;
  tipoSenha: string = 'password';

  ngOnInit() {
    localStorage.clear();
  }

  entrar() {
    localStorage.setItem('usuario', this.usuario);

    this.usuarioService.login(this.usuario, this.senha)
      .then(resultado => {

        if (resultado.status != 500) {
          localStorage.setItem('cargo', resultado.cargo)
          localStorage.setItem('foto', resultado.imagem)
          this.route.navigate(['/visaogeral']);
        } else {
          this.route.navigate(['/']);
        }

      })
      .then(resolvido => {
      }).catch(erro => {
        console.log("erro -> " + erro);

        this.route.navigate(['/']);

      })


  }

  cadastrar() {
    this.route.navigate(['/cadastro/1'])
  }

  habilitarVisualizacao() {
    this.visualizacao = !this.visualizacao;

    if (this.visualizacao) {
      this.tipoSenha = 'text';
    } else {
      this.tipoSenha = 'password';
    }
  }
}
