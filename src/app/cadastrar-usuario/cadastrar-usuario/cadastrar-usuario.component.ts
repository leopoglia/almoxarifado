import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  alerta: boolean = false;
  email: string = '';
  nome: string = '';
  cargo: string = '';
  matricula: string = '';
  imagem: any;
  alertar = "Usuário cadastrado com sucesso!";

  constructor(
    private usuarioService: UsuariosService
  ) { }

  ngOnInit() {
    localStorage.setItem('atual', '5');

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }

  cadastrarUsuario() {

    console.log(this.nome, this.email, this.cargo, this.matricula, this.imagem);


    if (this.nome != '' && this.email != '' && this.matricula != '' && this.imagem != null) {

      if (this.cargo == '') {
        this.cargo = 'Professor';
      }

      console.log(this.cargo)

      this.usuarioService.criarUsuariosDentro(this.nome, this.email, this.matricula, this.cargo, this.imagem)
        .then(resultado => {

          this.alerta = true;
          this.alertar = "Usuário cadastrado com sucesso!";
          this.nome = '';
          this.email = '';
          this.cargo = '';
          this.imagem = '';
          this.matricula = '';
        })

      setTimeout(() => {
        this.alerta = false
      }, 1000 * 10);
    } else {
      this.alerta = true;
      this.alertar = "Preencha todos os campos!";

      setTimeout(() => {
        this.alerta = false
      }, 1000 * 10);
    }
  }

  mudarCargo($event) {
    this.cargo = $event.target.value;
  }

  enviarImagem(imagem) {
    this.imagem = imagem;
  }
}
