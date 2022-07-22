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
    if(localStorage.getItem("usuario") == "Administrador" || localStorage.getItem("usuario") == "Atendente"){
      this.permissao = true;
    }
  }

  reservas = [1, 2];
  permissao = false;

  link(){
    this.route.navigate(['/reservas/detalhes']);
  }

}
