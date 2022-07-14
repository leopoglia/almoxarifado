import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  situacaolocalizacao = true;
  
  localizacao() {
    if (this.situacaolocalizacao == true) {
      this.situacaolocalizacao = false;
    } 
  }
}
