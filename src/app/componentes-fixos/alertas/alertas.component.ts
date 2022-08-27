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
      this.ligado = "false";
      localStorage.setItem("alerta", "false");
    }, 9000);
  }

  ligado = localStorage.getItem("alerta");
}
