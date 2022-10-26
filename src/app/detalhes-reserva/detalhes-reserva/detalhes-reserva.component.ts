import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.component.html',
  styleUrls: ['./detalhes-reserva.component.css']
})
export class DetalhesReservaComponent implements OnInit {

  permissao = false;
  modaldevolucao = false;
  alerta: boolean = false;
  alertar = "Devolvido com sucesso!";

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }

    if (localStorage.getItem("usuario") == "Administrador" || localStorage.getItem("usuario") == "Atendente") {
      this.permissao = true;
    }
  }

  produtos = [
    { imagem: "https://www.fibracem.com/wp-content/uploads/2020/11/0000_Abracadeira.0.png", "nome": "Abracadeira para poste", "localizacao": "P3CEA8", "descartavel": "Descartavel", "unidades": 100, "baixa": false }]


  darBaixa(item) {
    item.baixa = true;
  }

  devolver() {
    this.modaldevolucao = !this.modaldevolucao;

  }
}
