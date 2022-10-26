import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  constructor() { }

  @Input() alerta;

  ngOnInit() {

  }

  ligado: boolean = false;
}
