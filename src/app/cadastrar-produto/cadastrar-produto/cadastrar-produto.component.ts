import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  nome: string;
  caracteristica: string;
  quantidade: number;
  detalhes: string;
  localizacao: string;
  situacaolocalizacao: boolean = false;
  situacaoclassificacao: boolean = false;
  descartavel: boolean = false;
  img64;
  anexos;
  alerta: boolean = false;
  alertar = "Produto cadastrado com sucesso!";

  ngOnInit() {
    localStorage.setItem('atual', '4');

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }

  cadastrarProduto() {
    this.produtoService.cadastrarProduto(this.nome, this.caracteristica, this.quantidade, this.descartavel, this.img64, this.anexos)
    
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
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img64 = reader.result;
    };
  }

  anexo(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.anexos = reader.result;
    };
  }

  situacaoLocalizacao() {
    if (this.situacaolocalizacao == true) {
      this.situacaolocalizacao = false;
    } else {
      this.situacaolocalizacao = true;
    }
  }

  classificacao() {
    if (this.situacaoclassificacao == true) {
      this.situacaoclassificacao = false;
    } else {
      this.situacaoclassificacao = true;
    }
  }

  fechou($event) {
    if ($event == 1) {
      this.situacaoLocalizacao();
    } else {
      this.classificacao();
    }
  }

}
