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
  }

  entrar(){
    console.log("usuario: ", this.usuario, "senha: ", this.senha);
    this.route.navigate(['/visaogeral']);
  }

  cadastrar(){
    this.route.navigate(['/cadastro/1'])
  }

}
