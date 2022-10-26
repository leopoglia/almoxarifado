import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnChanges {

  @Input() buscar: string;
  retornoItem: boolean = false;


  ngOnChanges(changes: SimpleChanges) {
    console.log(this.buscar)
  }

  constructor() { }

  ngOnInit() {
  }

  usuarios = [{ nome: "Leonardo Heitor Poglia", imagem: "data:image/webp;base64,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", cargo: "Administrador", matricula: 123, email: "leonardo@gmail.com", aceito: "nao" },
  { nome: "Eduarda Bolgenhage dos Campos", imagem: "https://avatars.githubusercontent.com/u/93354200?v=4", cargo: "Administrador", matricula: 123, email: "eduarda@gmail.com", aceito: "sim" },
  { nome: "Vytor Augusto Rosa", imagem: "https://lh3.googleusercontent.com/a-/ACNPEu8FWOj1sUc3ihdV_8rRPB9aTW7cqM2PrXHFxNyy=s88-w88-h88-c-k", cargo: "Administrador", matricula: 123, email: "vytor@gmail.com", aceito: "recusado" }]


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
