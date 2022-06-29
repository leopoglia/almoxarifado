import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  entrar(){
    this.route.navigate(['/visaogeral'])
  }

  cadastrar(){
    this.route.navigate(['/cadastro1'])
  }

}
