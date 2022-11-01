import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';

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
  imagem = []

  constructor(
    private reservaService: ReservaService
  ) { }


  ngOnInit() {
    localStorage.setItem('atual', '2');
    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }

  cadastrarReserva() {

    this.reservaService.criarReserva(this.produtos, this.dataRetirada, this.dataDevolucao, this.horaRetirada, this.horaDevolucao, this.idUsuario)

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

    this.imagem.push($event.imagem.dados);
    this.produtos.push($event);
    $event.quantidadeAdicionada = 0;
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
