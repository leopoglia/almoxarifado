import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuario = localStorage.getItem("usuario");
  primeiroNome = this.usuario.split(" ", 1);

  constructor(private route: Router) { }

  ngOnInit() {
  }

  perfil(){
    console.log('oi')
    this.route.navigate(['/perfil'])
  }

}
