import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalizacaoService {

  constructor() { }

  url: string = "http://localhost:8080/api";

  buscarLocalizacoes() {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/localizacao', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarLocalizacao(codigo) {
    return new Promise((resolvido, rejeitado) => {

      fetch(this.url + '/localizacao/' + codigo, {
        method: 'GET'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  cadastrarLocalizacao(localizacao) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/localizacao', {
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
