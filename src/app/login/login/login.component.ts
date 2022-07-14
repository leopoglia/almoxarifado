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

  usuario = '';
  senha = '';

  ngOnInit() {
    localStorage.clear();
  }

  entrar(){
    localStorage.setItem('usuario', this.usuario);
    localStorage.setItem('senha', this.senha);


    this.usuarioService.login(this.usuario, this.senha)
    .then(resolvido => {
      console.log('a')
      console.log("deu boaaaaaaaaaaaaa -> " + resolvido)

    }).catch(erro => {
      console.log('a')
      console.log('ERRO AO BUSCAR USUÁRIOS', erro)
    })

      
  }

  cadastrar(){
    this.route.navigate(['/cadastro/1'])
  }

}
