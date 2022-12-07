import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.component.html',
  styleUrls: ['./detalhes-reserva.component.css']
})
export class DetalhesReservaComponent implements OnInit {

  permissao: any = false;
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
  ) { }

  ngOnInit() {

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }

    if (localStorage.getItem("cargo") == "Atendente" || localStorage.getItem("cargo") == "Administrador") {
      this.permissao = true;
    }

    this.buscarReserva();
  }

  buscarReserva() {
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
    this.produtos = []

    if (this.resultado != undefined) {
      for (let i = 0; i < this.resultado.length; i++) {

        this.produtos.push({ codigo: this.resultado[i].produto.codigo, descartavel: this.resultado[i].produto.descartavel, nome: this.resultado[i].produto.nome, quantidade: this.resultado[i].quantidade, imagem: "data:image/png;base64," + this.resultado[i].produto.imagem.dados, devolvido: this.resultado[i].devolvido, localizacao: this.resultado[i].produto.localizacao });
        this.imagem.push(this.resultado[i].produto.imagem);
      }
    }

    return this.produtos;
  }


  darBaixa(item) {
    let elemento;

    this.resultado.forEach(element => {
      if (element.produto.codigo == item.codigo) {
        elemento = element;
      }
    });


    this.reservaService.atualizarProdutoReserva(elemento).then(res => {
      this.alerta = !this.alerta;
      this.buscarProdutos();

      setTimeout(() => {
        this.alerta = !this.alerta;

        this.alertar = "Devolvido com sucesso!";
      }, 3000);


      this.buscarReserva();
      this.buscarProdutos();
    });


  }

  devolver() {
    this.modaldevolucao = !this.modaldevolucao;
  }

  remover() {

    console.log(this.reserva.codigo);

    this.reservaService.deletarReserva(this.reserva.codigo).then(res => {

      this.alertar = "Removido com sucesso!";

      this.alerta = !this.alerta;

      setTimeout(() => {
        this.alerta = !this.alerta;
        this.alertar = "Devolvido com sucesso!";
        window.location.href = "/reservas";
      }, 3000);

    })
  }

}
