import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    if (localStorage.getItem("cargo") == "2" || localStorage.getItem("cargo") == "1") {
      this.permissao = true;
    }
  }

  reservas = [1, 2, 3, 4, 5];
  permissao = false;

  link() {
    this.route.navigate(['/reservas/detalhes']);
  }

}
