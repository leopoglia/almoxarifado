import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  situacaofiltro = false;

  filtro(){
    if(this.situacaofiltro == true){
      this.situacaofiltro = false;
    }else{
      this.situacaofiltro = true;
    }
  }
}
