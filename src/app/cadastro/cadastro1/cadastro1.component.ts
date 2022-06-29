import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-cadastro1',
  templateUrl: './cadastro1.component.html',
  styleUrls: ['./cadastro1.component.css']
})
export class Cadastro1Component implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  cadastro2(){
    this.route.navigate(['/cadastro/2']);
  }

}
