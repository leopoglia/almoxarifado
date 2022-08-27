import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  nome:string;
  caracteristica:string;
  quantidade:number;
  detalhes:string;
  localizacaos:string;
  situacaolocalizacao:boolean = false;
  situacaoclassificacao:boolean = false;
  img64;

  ngOnInit() {
    localStorage.setItem('atual', '4');

    if(localStorage.getItem('menu') == 'aberto'){
      localStorage.setItem('menu', 'abrir')
    }
  }

  cadastrarProduto(){
    // this.produtoService.cadastrarProduto(this.nome, this.caracteristica, this.quantidade, this.detalhes, this.img64).then(resultado => {console.log(resultado)});

      localStorage.setItem("alerta", "true")
      location.reload();

    this.nome = "";
    this.caracteristica = "";
    this.quantidade = null;
    this.detalhes = "";
    this.localizacaos = "";
  }


  mudanca(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img64 = reader.result;    
    };
  }

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

  fechou($event){
    if($event == 1){
      this.localizacao();
    }else{
      this.classificacao();
    }
  }

}
