import { Component, OnInit } from '@angular/core';
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
        console.log(resultado)

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
    let matrizVazia = [];
    if (dado) {
      matrizVazia = this.produtos.filter((data, { }) => {
        return data.nome
          .toLocaleLowerCase()
          .startsWith(dado.toLocaleLowerCase());
      });
      matrizVazia = matrizVazia.map((data, { }) => {
        return ({ "codigo": data.codigo, "imagem": data.codigo, "nome": data.nome });
      });
      document.querySelector(".input").classList.add("ativo");
      this.sugestoes(matrizVazia);
    } else {
      document.querySelector(".input").classList.remove("ativo");
    }

  };

  inserirItem(codigo) {
    console.log(codigo)
  }

  sugestoes(lista) {
    let dados;

    console.log(lista)

    if (lista.length) {
      dados = lista.join("");
    } else {
      dados = `<li>Invalido</li>`;
    }
    this.busca = dados;
  }

}
