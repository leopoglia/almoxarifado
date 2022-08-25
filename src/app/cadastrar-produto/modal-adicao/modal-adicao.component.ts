import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-adicao',
  templateUrl: './modal-adicao.component.html',
  styleUrls: ['./modal-adicao.component.css']
})
export class ModalAdicaoComponent implements OnInit {

  constructor() { }

  @Input() item: string;


  ngOnInit() {
  }

  situacao = true;
  
  localizacao() {
    if (this.situacao == true) {
      this.situacao = false;
    } 
  }
}
