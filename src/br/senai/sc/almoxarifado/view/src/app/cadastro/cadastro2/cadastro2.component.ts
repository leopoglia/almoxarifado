import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['./cadastro2.component.css']
})
export class Cadastro2Component implements OnInit {

  constructor(private route: Router) { }

  email = "";
  matricula = "";

  ngOnInit() {

  }

  cadastro3(){
    localStorage.setItem("email", this.email);
    localStorage.setItem("matricula", this.matricula);
    this.route.navigate(['/cadastro/3']);
  }

}
