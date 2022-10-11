import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastro3',
  templateUrl: './cadastro3.component.html',
  styleUrls: ['./cadastro3.component.css']
})
export class Cadastro3Component implements OnInit {

  imagem;

  mudanca(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagem = reader.result;    
    };
  }

  nome = localStorage.getItem("nome");
  senha = localStorage.getItem("senha");
  matricula = localStorage.getItem("matricula");
  email = localStorage.getItem("email");

  constructor(private router: Router,
    private route: ActivatedRoute, 
    private usuarioService: UsuariosService) { }

  ngOnInit() {
  }

  cadastrar(){
    this.usuarioService.criarUsuarios(this.matricula, this.email, this.senha, this.nome, this.imagem).then(resultado => {console.log(resultado)})
    this.router.navigate(['/']);
  }



}
