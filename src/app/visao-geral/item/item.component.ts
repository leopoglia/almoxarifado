import { Component, OnInit, Input, OnChanges, SimpleChanges, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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


  constructor(
    private route: Router,
    private produtoService: ProdutoService,
    private zone: NgZone
  ) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.ordernado == false) {
      this.produtoService.buscarProdutos()
        .then(resultado => {
          this.list = resultado;
          this.produtos = this.list.list;
          this.tamanho = this.produtos.length;
        }).catch(erro => {
          console.log('ERRO AO BUSCAR USUÁRIOS', erro)
        })
    } else {

      if (changes.ordernado) {
        if (this.produtos) {
          this.produtos = this.produtos.sort((a, b) => (a.NOME > b.NOME) ? 1 : ((b.NOME > a.NOME) ? -1 : 0));

          console.log(this.produtos);
        } else {
          this.produtos = this.list.list;
        }
      }
    }

    if (changes.buscar) {
      if (this.buscar != '') {

        this.produtos = this.produtos.filter((item) => {
          return item.NOME.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1;
        })


        console.log(this.produtos)

      } else {
        this.produtos = this.list.list;
      }
    }
  }

  link(id) {
    this.route.navigate(['/visaogeral/produto/' + id]);
  }

}
