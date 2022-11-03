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

  edita: boolean = true;
  modalQuantidade: boolean = false;
  salvar: boolean = false;
  list;
  produtos = [];
  idParametro;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,) {
    this.idParametro = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.produtoService.buscarProduto(this.idParametro)
      .then(resultado => {
        this.produtos.push(resultado);


      }).catch(erro => {
        console.log('ERRO AO BUSCAR PRODUTO', erro)
      })

    if (localStorage.getItem('menu') == 'aberto') {
      localStorage.setItem('menu', 'abrir')
    }
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

  buscarUsuario() {
    if ((localStorage.getItem('cargo') == "Atendente") || (localStorage.getItem('cargo') == "Administrador")) {
      return true;
    } else {
      return false;
    }
  }

  salvarEdicao() {
    this.salvar = !this.salvar;
  }

  fechou() {
    this.salvar = !this.salvar;
  }

  classificacao($event){
    console.log($event)
  }
}

