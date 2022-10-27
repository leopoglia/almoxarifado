import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  constructor() { }

  url: string = "http://localhost:8080/api";

  buscarProdutos() {
    return new Promise((resolvido, rejeitado) => {

      fetch(this.url + '/produtos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarProduto(codigo) {
    return new Promise((resolvido, rejeitado) => {

      fetch(this.url + '/produtos/' + codigo, {
        method: 'GET'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  deletarProduto(codigo) {
    return new Promise((resolvido, rejeitado) => {

      fetch(this.url + '/produtos/' + codigo, {
        method: 'DELETE'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  cadastrarProduto(nome, caracteristica, quantidade, descartavel, imagem) {
    console.log(nome, caracteristica, quantidade, descartavel, imagem)

    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/produtos', {
        method: 'POST',
        body: JSON.stringify({ nome: nome, caracteristicas: caracteristica, quantidade: quantidade, descartavel: descartavel, imagem: imagem }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  editarProduto(codigo, nome, caracteristica, quantidade, descartavel, imagem) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/produtos/' + codigo, {
        method: 'PUT',
        body: JSON.stringify({ nome: nome, caracteristicas: caracteristica, quantidade: quantidade, descartavel: descartavel, imagem: imagem }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}
