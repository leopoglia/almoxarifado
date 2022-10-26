import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuario = localStorage.getItem("usuario");
  primeiroNome = this.usuario.split(" ", 1);

  constructor(private route: Router,
    private usuarioService: UsuariosService) { }

  ngOnInit() {
    
  }

  perfil(){
    this.route.navigate(['/perfil'])
  }

  
  list;
  usuarios;
  imagem = localStorage.getItem("foto");

}
