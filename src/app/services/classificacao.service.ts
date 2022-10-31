import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClassificacaoService {

  constructor() { }

  url: string = "http://localhost:8090/api";

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

  cadastrarClassificacao(localizacao) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/classificacao', {
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
}
