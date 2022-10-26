import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';



@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.css']
})
export class ItemGridComponent implements OnInit {

  @Input() buscar: string;


  constructor(
    private route: Router,
    private produtoService: ProdutoService,
  ) {
  }

  ngOnInit() {

    this.produtoService.buscarProdutos()
      .then(resultado => {
        this.list = resultado;
        this.produtos = this.list.list;
        this.tamanho = this.produtos.length;
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUÁRIOS', erro)
      })
  }

  @Input() ordernado: boolean;

  










  list;
  produtos;
  tamanho;

  link(id) {
    this.route.navigate(['/visaogeral/produto/' + id]);
  }

}
