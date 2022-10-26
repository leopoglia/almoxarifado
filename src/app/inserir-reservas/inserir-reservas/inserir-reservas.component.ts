import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserir-reservas',
  templateUrl: './inserir-reservas.component.html',
  styleUrls: ['./inserir-reservas.component.css']
})
export class InserirReservasComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
    localStorage.setItem('atual', '2');
    if(localStorage.getItem('menu') == 'aberto'){
      localStorage.setItem('menu', 'abrir')
    }
  }

  alertar = "Reserva feita com sucesso!";
  alerta:boolean = false;



  cadastrarReserva(){
    this.alerta = true;

    setTimeout(() => {
      this.alerta = false;
    }, 1000 * 10);
  }
}
