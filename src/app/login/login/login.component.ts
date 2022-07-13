import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  usuario = '';
  senha = '';

  ngOnInit() {
    localStorage.clear();
  }

  entrar(){
    localStorage.setItem('usuario', this.usuario);
    localStorage.setItem('senha', this.senha);
    

    if(localStorage.getItem('usuario') == 'Atendente' || localStorage.getItem('usuario') == 'Administrador'){
    localStorage.setItem('true', 'cadastarProduto');
    localStorage.setItem('true', 'cadastrarUsuarios');
    localStorage.setItem('true', 'aceitarUsuario');
    }else{
      localStorage.setItem('false', 'cadastarProduto');
      localStorage.setItem('false', 'cadastrarUsuarios');
      localStorage.setItem('false', 'aceitarUsuario');
    }

    this.route.navigate(['/visaogeral']);
  }

  cadastrar(){
    this.route.navigate(['/cadastro/1'])
  }

}
