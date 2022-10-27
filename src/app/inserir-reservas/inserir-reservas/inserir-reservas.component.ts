import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserir-reservas',
  templateUrl: './inserir-reservas.component.html',
  styleUrls: ['./inserir-reservas.component.css']
})
export class InserirReservasComponent implements OnInit {

  alertar = "Reserva feita com sucesso!";
  alerta: boolean = false;
  produtos: any[] = [];
  quantidadeAdicionada: number = 0;

  constructor() { }


  ngOnInit() {
    localStorage.setItem('atual', '2');
    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }

  cadastrarReserva() {
    this.alerta = true;

    setTimeout(() => {
      this.alerta = false;
    }, 1000 * 10);
  }

  adicionarItem($event) {


    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].codigo == $event.codigo) {
        return;
      }
    }

    $event.quantidadeAdicionada = 0;

    this.produtos.push($event);
  }

  removerItem($event) {

    if (this.produtos.length > 0) {
      this.produtos.splice($event, 1);
    }
  }

  menos(produto) {
    if (produto.quantidadeAdicionada == NaN || produto.quantidadeAdicionada == 0 || produto.quantidadeAdicionada == null || produto.quantidadeAdicionada == undefined) {
      produto.quantidadeAdicionada = 0;
    }



    if (produto.quantidadeAdicionada > 0) {
      produto.quantidadeAdicionada--;
    }
  }

  mais(produto) {

    if (produto.quantidadeAdicionada == NaN || produto.quantidadeAdicionada == 0 || produto.quantidadeAdicionada == null || produto.quantidadeAdicionada == undefined) {
      produto.quantidadeAdicionada = 0;
    }

    if (produto.quantidadeAdicionada >= produto.quantidade) {
      return;
    }

    produto.quantidadeAdicionada++;
  }

  mudancaAdicionada(produto) {
    if (produto.quantidadeAdicionada > produto.quantidade) {
      produto.quantidadeAdicionada = produto.quantidade;
    }
  }
}
