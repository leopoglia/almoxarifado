import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.css']
})
export class ItemGridComponent implements OnInit, OnChanges {

  @Input() buscar: string;
  @Input() ordernado: boolean;

  retornoItem: boolean = false;
  resultado: any;
  produtos;
  tamanho;


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
          console.log(resultado)

          this.resultado = resultado;
          if (this.resultado.length > 0) {
            this.produtos = resultado;
            this.tamanho = this.produtos.length;
            this.retornoItem = false;

            this.produtos.forEach(element => {
              this.produtos.imagem = element.imagem.dados;
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
          this.produtos = this.produtos.sort((a, b) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0));
        } else {
          this.produtos = this.resultado;
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
      return item.NOME.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1;
    }).length > 0) {
      this.retornoItem = false;

      return this.produtos.filter((item) => {
        return item.NOME.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1;
      });

    } else {
      this.retornoItem = true;
    }
  }


  link(id) {
    this.route.navigate(['/visaogeral/produto/' + id]);
  }

}
