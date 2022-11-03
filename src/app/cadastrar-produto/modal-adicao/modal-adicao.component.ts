import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClassificacaoService } from 'src/app/services/classificacao.service';
import { LocalizacaoService } from 'src/app/services/localizacao.service';


@Component({
  selector: 'app-modal-adicao',
  templateUrl: './modal-adicao.component.html',
  styleUrls: ['./modal-adicao.component.css']
})
export class ModalAdicaoComponent implements OnInit {

  constructor(
    private classificacaoService: ClassificacaoService,
    private localizacaoService: LocalizacaoService
  ) { }

  @Input() item: number;
  @Output() fechou = new EventEmitter();

  titulo: String = "";
  titulo2: String = "";
  situacao: Boolean = true;
  texto: String = "";
  alerta: boolean = false;
  alertar = "Classificação cadastrado com sucesso!";


  ngOnInit() {

    if (this.item == 1) {
      this.titulo = "Insira a Localizacao";
    } else if (this.item == 2) {
      this.titulo = "Insira a Classificacao";
    } else if (this.item == 3) {
      this.titulo = "Inserir o motivo da edição";
    } else if (this.item == 4) {
      this.titulo = "Quantidade da devolução"
      this.titulo2 = "Motivo defeito"
    }
  }


  fechar() {
    if (this.situacao == true) {
      this.situacao = false;
      this.fechou.emit(this.item);
    }
  }

  alterarSituacao($event) {
    $event.path[0].classList.toggle("situacao-atual")
  }

  cadastrar() {
    if (this.item == 1) {
      this.localizacaoService.cadastrarLocalizacao(this.texto).then(res => {
        console.log(res)
        this.fechar();
      })
    } else if (this.item == 2) {
      this.classificacaoService.cadastrarClassificacao(this.texto).then(res => {
        this.fechar();

      })
    }
  }
}
