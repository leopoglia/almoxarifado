import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,) {
    this.idParametro = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.produtoService.buscarProduto(this.idParametro)
      .then(resultado => {
        this.list = resultado;
        this.produtos = this.list.list;
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUÁRIOS', erro)
      })

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
  }

  edita = true;
  modalQuantidade: boolean = false;
  salvar = false;

  mostrarHistorico() {

  }

  editar() {
    this.edita = !this.edita;
  }

  funcaoQuantidade() {
    if (this.modalQuantidade == true) {
      this.modalQuantidade = false;
    } else {
      this.modalQuantidade = true;
    }
  }


  salvarEdicao() {
    this.salvar = !this.salvar;

    console.log(this.edita)
  }

  fechou() {
    this.salvar = !this.salvar;
  }



  list;
  produtos;
  idParametro;
}

