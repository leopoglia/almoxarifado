import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClassificacaoService {

  constructor() { }

  url: string = "http://localhost:8080/api";

  buscarClassificacoes() {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/classificacao', {
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

      fetch(this.url + '/classificacao/' + codigo, {
        method: 'GET'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  cadastrarClassificacao(classificacao) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/classificacao', {
        method: 'POST',
        body: JSON.stringify({ classificacao: classificacao }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}
