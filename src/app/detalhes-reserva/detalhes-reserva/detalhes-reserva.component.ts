import { Component, OnInit } from '@angular/core';
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

  constructor(
    private reservaService: ReservaService
  ) { }

  ngOnInit() {

    console.log(this.url);

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }

    if (localStorage.getItem("cargo") == "1" || localStorage.getItem("cargo") == "2") {
      this.permissao = true;
    }

    this.reservaService.buscarReserva(this.url).then(res => {
      this.reserva = res[0];

      this.horaRetirada = this.reserva.horaRetirada;
      this.horaDevolucao = this.reserva.horaDevolucao;
      this.dataRetirada = this.reserva.dataRetirada.split("T")[0];
      this.dataRetirada = this.dataRetirada.split('-').reverse().join('/');
      this.dataDevolucao = this.reserva.dataDevolucao.split("T")[0];
      this.dataDevolucao = this.dataDevolucao.split('-').reverse().join('/');


      this.produtos = this.reserva.produtos;
    })


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
