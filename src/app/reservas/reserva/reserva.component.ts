import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private route: Router,
    private reservaService: ReservaService) { }

  ngOnInit() {
    if (localStorage.getItem("cargo") == "2" || localStorage.getItem("cargo") == "1") {
      this.permissao = true;
    }


    this.reservaService.buscarReservas().then(res => {
      this.reservas = res;
      console.log(this.reservas);
    }
    )
  }

  reservas: any;
  permissao = false;

  link() {
    this.route.navigate(['/reservas/detalhes']);
  }

}
