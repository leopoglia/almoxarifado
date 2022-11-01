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

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {

    this.usuariosService.buscarUsuarios().then((resultado) => {
      this.usuarios = resultado;
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
}
