import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnexoService {

  constructor() { }

  url: string = "http://localhost:8080/api";

  Anexobuscar() {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/anexos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarClassificacao(codigo) {
    return new Promise((resolvido, rejeitado) => {

      fetch(this.url + '/anexos/' + codigo, {
        method: 'GET'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  cadastrarClassificacao(localizacao) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/anexos', {
        method: 'POST',
        body: JSON.stringify({ localizacao: localizacao }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  deletarProduto(codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/anexos/' + codigo, {
        method: 'DELETE'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}
