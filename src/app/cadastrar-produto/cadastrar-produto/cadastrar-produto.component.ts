import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ClassificacaoService } from 'src/app/services/classificacao.service';
import { LocalizacaoService } from 'src/app/services/localizacao.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService
    , private classificacaoService: ClassificacaoService
    , private localizacaoService: LocalizacaoService) { }

  nome: string;
  caracteristica: string;
  quantidade: number;
  detalhes: string;
  localizacao: string;
  situacaolocalizacao: boolean = false;
  situacaoclassificacao: boolean = false;
  descartavel: boolean = false;
  classificacoes: any;
  localizacoes: any;
  optionClassificacao: string = "0";
  optionLocalizacao: string = "0";
  img64;
  anexos = null;
  alerta: boolean = false;
  alertar = "Produto cadastrado com sucesso!";

  ngOnInit() {
    localStorage.setItem('atual', '4');

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }

    this.buscarClassificacoes();
    this.buscarLocalizacoes();
  }

  buscarClassificacoes() {
    this.classificacaoService.buscarClassificacoes().then(res => {
      console.log(res)
      this.classificacoes = res;
    })
  }

  buscarLocalizacoes() {
    this.localizacaoService.buscarLocalizacoes().then(res => {
      this.localizacoes = res;
    })
  }


  cadastrarProduto() {
    this.produtoService.cadastrarProduto(this.nome, this.caracteristica, this.quantidade, this.descartavel, this.img64, this.anexos, this.optionClassificacao, this.optionLocalizacao)

      .then(resultado => {
        console.log(resultado)
      }).catch(erro => {
        console.log('ERRO AO CADASTRAR PRODUTO', erro)
      })

    this.alerta = true

    setTimeout(() => {
      this.alerta = false
    }, 1000 * 10);


    this.nome = "";
    this.caracteristica = "";
    this.quantidade = null;
    this.detalhes = "";
    this.localizacao = "";
  }

  descatavel($event) {
    this.descartavel = $event.path[0].checked;
  }


  mudanca(file) {
    this.img64 = file;
  }

  anexo(file) {
    this.anexos = file;
  }

  situacaoLocalizacao() {
    if (this.situacaolocalizacao == true) {
      this.situacaolocalizacao = false;
    } else {
      this.situacaolocalizacao = true;
    }
    this.buscarLocalizacoes();
  }

  classificacao() {
    if (this.situacaoclassificacao == true) {
      this.situacaoclassificacao = false;
    } else {
      this.situacaoclassificacao = true;
    }
    this.buscarClassificacoes();
  }

  fechou($event) {
    if ($event == 1) {
      this.situacaoLocalizacao();
    } else {
      this.classificacao();
    }
    this.buscarClassificacoes();
    this.buscarLocalizacoes();
  }

}
