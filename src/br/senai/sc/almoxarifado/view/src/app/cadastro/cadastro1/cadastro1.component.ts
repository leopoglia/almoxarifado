import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-cadastro1',
  templateUrl: './cadastro1.component.html',
  styleUrls: ['./cadastro1.component.css']
})
export class Cadastro1Component implements OnInit {

  constructor(private route: Router) { }

  nome = '';
  senha = '';

  ngOnInit() {

  }

  cadastro2(){
    localStorage.setItem("nome", this.nome);
    localStorage.setItem("senha", this.senha);
    this.route.navigate(['/cadastro/2']);
  }

}
