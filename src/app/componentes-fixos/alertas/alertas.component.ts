import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      localStorage.setItem("alerta", "false");
    }, 9500);
  }

  ligado = localStorage.getItem("alerta");
}
