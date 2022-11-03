import { Injectable } from '@angular/core';
import { Options } from 'selenium-webdriver';

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

  cadastrarProduto(nome, caracteristica, quantidade, descartavel, imagem, anexos, classificacao, localizacao) {
    console.log(classificacao, localizacao)
    var formData = new FormData();
    let produto = { "nome": nome, "caracteristica": caracteristica, "quantidade": quantidade, "descartavel": descartavel, classificacao: { "codigo": classificacao }, localizacao: { "codigo": localizacao } };
    formData.append('produto', JSON.stringify(produto));
    formData.append('arquivos', anexos);
    formData.append('imagem', imagem);


    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/produtos', {
        method: 'POST',
        body: formData
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
