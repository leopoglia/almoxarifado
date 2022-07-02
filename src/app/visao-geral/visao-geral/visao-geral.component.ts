import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {

  }
}
