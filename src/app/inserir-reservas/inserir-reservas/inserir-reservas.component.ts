import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { ProdutoService } from 'src/app/services/produto.service';

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
  dataRetirada: Date;
  dataDevolucao: Date;
  horaRetirada: Time;
  horaDevolucao: Time;
  idUsuario = parseInt(localStorage.getItem('idUsuario'));
  imagem = [];
  tamanhoReserva = 0;
  buscaProduto;
  reservaAdicionada = JSON.parse(localStorage.getItem('reservas'));

  constructor(
    private reservaService: ReservaService,
    private produtoService: ProdutoService
  ) { }


  ngOnInit() {
    localStorage.setItem('atual', '2');
    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }

    if (localStorage.getItem('reservas') == null) {
      localStorage.setItem('reservas', '[]');
    }

    this.buscarProdutos();

  }

  buscarProdutos() {
    this.produtoService.buscarProdutos().then(res => {
      this.buscaProduto = res;

      if (this.reservaAdicionada.length > 0) {
        for (let i = 0; i < this.buscaProduto.length; i++) {
          if (this.buscaProduto[i].codigo == this.reservaAdicionada[i].codigo) {
            this.adicionarItem(this.buscaProduto[i]);
          }
        }
      }
    })
  }


  cadastrarReserva() {
    if (this.produtos.length == 0) {

      this.alerta = true;
      this.alertar = "Adicione um produto na reserva."

      setTimeout(() => {
        this.alerta = false;
      }, 1000 * 10);

      return;

    }
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].quantidadeAdicionada == 0) {

        this.alerta = true;
        this.alertar = "O produto não pode estar com a quantidade 0."

        setTimeout(() => {
          this.alerta = false;
        }, 1000 * 10);

        return;
      }
    }

    // for (let i = 0; i < this.produtos.length; i++) {
    //   this.produtos[i].quantidade = this.produtos[i].quantidadeAdicionada;
    //   this.produtoService.editarProdutoQuantidade(this.produtos[i], this.produtos[i]);
    // }


    this.reservaService.criarReserva(this.produtos, this.dataRetirada, this.dataDevolucao, this.horaRetirada, this.horaDevolucao, this.idUsuario).then(res => {
      console.log(res);
      this.alertas();
    }).catch(err => {
      console.log(err);
    })
  }

  alertas() {
    this.alerta = true;

    setTimeout(() => {
      this.alerta = false;


      this.alertas();
      this.zerar();

    }, 1000 * 10);
  }

  zerar() {
    this.produtos = [];
    this.imagem = [];
    this.tamanhoReserva = 0;
    this.dataRetirada = null;
    this.dataDevolucao = null;
    this.horaRetirada = null;
    this.horaDevolucao = null;
    localStorage.setItem('reservas', '[]');
    this.reservaAdicionada = JSON.parse(localStorage.getItem('reservas'));
  }

  adicionarItem($event) {
    this.tamanhoReserva++;

    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].codigo == $event.codigo) {
        return;
      }
    }

    this.imagem.push($event.imagem.dados);
    this.produtos.push($event);
    $event.quantidadeAdicionada = 0;

  }

  removerItem($event) {
    this.tamanhoReserva--;

    if (this.produtos.length > 0) {
      this.produtos.splice($event, 1);
    }

    localStorage.setItem('reservas', '[]');


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
