import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservas: any;
  permissao = false;
  tamanho = 0;

  constructor(private route: Router,
    private reservaService: ReservaService) { }

  ngOnInit() {
    if (localStorage.getItem("cargo") == "2" || localStorage.getItem("cargo") == "1") {
      this.permissao = true;
    }

    this.reservaService.buscarReservas().then(res => {
      this.reservas = res;


      this.reservas.forEach(reserva => {
        if (reserva.visibilidade == true) {
          this.tamanho++;
        }
      });


      for (let i = 0; i < this.reservas.length; i++) {

        this.reservas[i].dataRetirada = this.reservas[i].dataRetirada.split("T")[0];
        this.reservas[i].dataRetirada = this.reservas[i].dataRetirada.split('-').reverse().join('/');
        this.reservas[i].dataDevolucao = this.reservas[i].dataDevolucao.split("T")[0];
        this.reservas[i].dataDevolucao = this.reservas[i].dataDevolucao.split('-').reverse().join('/');
      }
    }
    )
  }

  link(reserva) {
    this.route.navigate(['/reservas/detalhes/' + reserva.codigo]);
  }

}
