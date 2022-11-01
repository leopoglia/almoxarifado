import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() ordernado: boolean;
  @Input() buscar: string;


  list;
  produtos: any;
  tamanho;
  retornoItem: boolean = false;
  resultado: any;
  imagem = [];


  constructor(
    private route: Router,
    private produtoService: ProdutoService,
  ) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.ordernado == false) {
      this.produtoService.buscarProdutos()
        .then(resultado => {
          this.resultado = resultado;
          if (this.resultado.length > 0) {
            this.list = resultado;
            this.produtos = resultado;
            this.tamanho = this.produtos.length;
            this.retornoItem = false;

            this.produtos.forEach(element => {
              this.imagem.push(element.imagem.dados);
            });

          } else {
            this.retornoItem = true;
          }
        }).catch(erro => {
          console.log('ERRO AO BUSCAR USUÁRIOS', erro)
        })
    } else {

      if (changes.ordernado) {
        if (this.produtos) {
          this.produtos = this.produtos.sort((a, b) => (a.NOME > b.NOME) ? 1 : ((b.NOME > a.NOME) ? -1 : 0));
        } else {
          this.produtos = this.list.list;
        }
      }
    }
  }

  filter() {
    if (this.buscar == '') {
      return this.produtos;
    }

    if (this.produtos == undefined || this.produtos.length == 0) {
      return this.produtos;
    }


    if (this.produtos.filter((item) => {
      return item.nome.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1;
    }).length > 0) {
      this.retornoItem = false;

      return this.produtos.filter((item) => {
        return item.nome.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1;
      });

    } else {
      this.retornoItem = true;
    }
  }

  link(id) {
    this.route.navigate(['/visaogeral/produto/' + id]);
  }

}
