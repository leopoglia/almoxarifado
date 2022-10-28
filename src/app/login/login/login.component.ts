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
  resultado: any;

  ngOnInit() {
    localStorage.clear();
  }

  entrar() {
    localStorage.setItem('usuario', this.usuario);

    this.usuarioService.login(this.usuario, this.senha)
      .then(resultado => {
        this.resultado = resultado;

        if (this.resultado.status != 500) {
          localStorage.setItem('cargo', this.resultado.cargo)
          localStorage.setItem('foto', this.resultado.imagem)
          localStorage.setItem('idUsuario', this.resultado.codigo)
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
