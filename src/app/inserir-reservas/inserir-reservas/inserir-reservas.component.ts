import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserir-reservas',
  templateUrl: './inserir-reservas.component.html',
  styleUrls: ['./inserir-reservas.component.css']
})
export class InserirReservasComponent implements OnInit {

  alertar = "Reserva feita com sucesso!";
  alerta: boolean = false;
  produtos: any[] = [];
  quantidade: number = 0;

  constructor() { }


  ngOnInit() {
    localStorage.setItem('atual', '2');
    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }

  cadastrarReserva() {
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
    this.produtos.push($event);
  }

  removerItem($event) {
    if (this.produtos.length > 0) {
      this.produtos.splice($event, 1);
    }
  }

  menos() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }

  mais() {
    this.quantidade++;
  }
}
