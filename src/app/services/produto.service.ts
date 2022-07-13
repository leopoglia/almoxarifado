import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {



  constructor() { }

  buscarProdutos() {
    return new Promise((resolvido, rejeitado) => {

      fetch('http://localhost:3000/api/buscar_produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  cadastrarProduto(nome, caracteristica, quantidade, detalhes){
    return new Promise((resolvido, rejeitado) => {
      fetch('http://localhost:3000/api/criar_produto', {
        method: 'POST',
        body: JSON.stringify({nome: nome, caracteristicas: caracteristica, quantidade: quantidade, detalhes: detalhes}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

}