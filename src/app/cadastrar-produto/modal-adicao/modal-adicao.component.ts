import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-adicao',
  templateUrl: './modal-adicao.component.html',
  styleUrls: ['./modal-adicao.component.css']
})
export class ModalAdicaoComponent implements OnInit {

  constructor() { }

  @Input() item: number;
  @Output() fechou = new EventEmitter();


  ngOnInit() {

    if (this.item == 1) {
      this.titulo = "Insira a Localizacao";
    } else if(this.item == 2) {
      this.titulo = "Insira a Classificacao";
    } else if(this.item == 3) {
      this.titulo = "Inserir o motivo da edição";
    }
  }

  titulo = "";
  situacao = true;

  fechar() {
    if (this.situacao == true) {
      this.situacao = false;
      this.fechou.emit(this.item);
    }
  }
}
