import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';

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
  reserva: any;
  url = window.location.href.split("/")[5];
  horaRetirada;
  horaDevolucao;
  dataRetirada;
  dataDevolucao;
  resultado: any;
  produtos: any = [];
  imagem = [];

  constructor(
    private reservaService: ReservaService,
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit() {

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }

    if (localStorage.getItem("cargo") == "1" || localStorage.getItem("cargo") == "2") {
      this.permissao = true;
    }

    this.reservaService.buscarProdutoReserva(this.url).then(res => {
      this.reserva = res[0].reserva;
      this.resultado = res;

      this.horaRetirada = this.reserva.horaRetirada;
      this.horaDevolucao = this.reserva.horaDevolucao;
      this.dataRetirada = this.reserva.dataRetirada.split("T")[0];
      this.dataRetirada = this.dataRetirada.split('-').reverse().join('/');
      this.dataDevolucao = this.reserva.dataDevolucao.split("T")[0];
      this.dataDevolucao = this.dataDevolucao.split('-').reverse().join('/');


      this.produtos = this.reserva.produtos;
    })
  }

  buscarProdutos() {
    console.log(this.resultado)
    for (let i = 0; i < this.resultado.length; i++) {
      this.produtos.push({ codigo: this.resultado[i].produto.codigo, descartavel: this.resultado[i].produto.descartavel, nome: this.resultado[i].produto.nome, quantidade: this.resultado[i].quantidade, baixa: this.resultado[i].baixa, imagem: "data:image/png;base64," + this.resultado[i].produto.imagem.dados });
      this.imagem.push(this.resultado[i].produto.imagem);
    }
    return this.produtos;
  }


  darBaixa(item) {
    item.baixa = true;
  }

  devolver() {
    this.modaldevolucao = !this.modaldevolucao;

  }
}
