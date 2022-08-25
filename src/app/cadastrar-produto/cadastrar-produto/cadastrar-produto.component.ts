import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  nome = "";
  caracteristica = "";
  quantidade = "";
  detalhes = "";
  localizacaos = "";

  ngOnInit() {
    localStorage.setItem('atual', '4');

    if(localStorage.getItem('menu') == 'aberto'){
      localStorage.setItem('menu', 'abrir')
    }
  }

  cadastrarProduto(){
    this.produtoService.cadastrarProduto(this.nome, this.caracteristica, this.quantidade, this.detalhes, this.img64).then(resultado => {console.log(resultado)});
    this.nome = "";
    this.caracteristica = "";
    this.quantidade = "";
    this.detalhes = "";
    this.localizacaos = "";
  }

  img64;

  mudanca(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img64 = reader.result;    
    };
  }

  situacaolocalizacao = false;
  situacaoclassificacao = false;


  localizacao(){
    if(this.situacaolocalizacao == true){
      this.situacaolocalizacao = false;
    }else{
      this.situacaolocalizacao = true;
    }
  }

  classificacao(){
    if(this.situacaoclassificacao == true){
      this.situacaoclassificacao = false;
    }else{
      this.situacaoclassificacao = true;
    }
  }

}
