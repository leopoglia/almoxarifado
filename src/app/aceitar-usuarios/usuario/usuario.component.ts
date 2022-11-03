import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() buscar: string;
  retornoItem: boolean = false;
  usuarios: any = [];
  imagem = [];

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.buscarUsuario();

  }

  buscarUsuario() {
    this.usuariosService.buscarUsuarios().then((resultado) => {
      this.usuarios = resultado;

      console.log(this.usuarios);

      for (let i = 0; i < this.usuarios.length; i++) {
        this.usuarios[i].imagem = 'data:image/png;base64,' + this.usuarios[i].imagem.dados;
      }

    }).catch((erro) => {
      console.log(erro);
    })
  }


  filter() {
    if (this.buscar == '') {
      return this.usuarios;
    }

    if (this.usuarios.filter((item) => {
      return item.nome.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1;
    }).length > 0) {
      this.retornoItem = false;

      return this.usuarios.filter((item) => {
        return item.nome.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1;
      });

    } else {
      this.retornoItem = true;
    }
  }

  aceitarUsuario(aceitacao, usuario) {
    if (aceitacao == "APROVADO") {
      usuario.situacao = 0;
    } else {
      usuario.situacao = 1;
    }



    this.usuariosService.aceitarUsuario(usuario).then((resultado) => {
      this.buscarUsuario();
    }).catch((erro) => {
      console.log(erro);
    })

    this.buscarUsuario();

  }
}
