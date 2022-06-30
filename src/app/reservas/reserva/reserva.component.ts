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
  }

  reservas = [1, 2, 3, 4]

  link(){
    this.route.navigate(['/reservas/detalhes']);
  }

}
