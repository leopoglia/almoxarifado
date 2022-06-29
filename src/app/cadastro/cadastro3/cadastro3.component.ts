import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro3',
  templateUrl: './cadastro3.component.html',
  styleUrls: ['./cadastro3.component.css']
})
export class Cadastro3Component implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  irLogin(){
    this.route.navigate(['/']);
  }

}
