import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  tamanho: number;
  produtos: any;
  retornoItem: boolean = false;
  caixaInput: any = document.querySelector(".input");
  input: any = document.querySelector("input")
  busca: any = document.querySelector(".busca");
  matrizVazia: any;
  @Output() adicionarItem = new EventEmitter<string>();



  constructor(
    private produtoService: ProdutoService,
  ) {
  }

  ngOnInit() {
    this.tamanho = (document.querySelector(".input").clientWidth) + 9;
    document.getElementById("busca").style.width = this.tamanho + 'px';

    window.onresize = function () {
      document.getElementById("busca").style.width = ((document.querySelector(".input").clientWidth) + 9) + 'px';
    };

    this.produtoService.buscarProdutos()
      .then(resultado => {

        this.produtos = resultado;
        if (this.produtos.length > 0) {
          this.produtos = resultado;
          this.tamanho = this.produtos.length;
          this.retornoItem = false;
        } else {
          this.retornoItem = true;
        }
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUÁRIOS', erro)
      })


  }

  buscar(event) {
    let dado: any = event.target.value;
    if (dado) {
      this.matrizVazia = this.produtos.filter((data, { }) => {
        return data.nome
          .toLocaleLowerCase()
          .startsWith(dado.toLocaleLowerCase());
      });
      this.matrizVazia = this.matrizVazia.map((data, { }) => {
        return ({ "codigo": data.codigo, "imagem": data.codigo, "nome": data.nome, "quantidade": data.quantidade, "caracteristica": data.caracteristica, "descartavel": data.descartavel });
      });

      if (this.matrizVazia.length > 0) {

        document.querySelector(".input").classList.add("ativo");
      } else {
        document.querySelector(".input").classList.remove("ativo");
      }
    } else {
      document.querySelector(".input").classList.remove("ativo");
    }

  };

  inserirItem(produto) {
    this.adicionarItem.emit(produto);
  }

}
