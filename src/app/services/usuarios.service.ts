import { Injectable } from '@angular/core';
import { E } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  url: string = 'http://localhost:8090/api';

  constructor() { }

  criarUsuarios(matricula, email, senha, nome, imagem) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuario', {
        method: 'POST',
        body:
          JSON.stringify({ matricula: matricula, email: email, senha: senha, nome: nome, imagem: "1", situacao: 2, cargo: 0 }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarUsuarios() {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuario', {
        method: 'GET'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarUsuario(codigo) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuario/' + codigo, {
        method: 'GET'
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  editarUsuario(codigo, matricula, email, senha, nome, imagem) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuario/' + codigo, {
        method: 'POST',
        body:
          JSON.stringify({ matricula: matricula, email: email, senha: senha, nome: nome, imagem: imagem }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  login(nome, senha) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuario/login', {
        method: 'POST',
        body:
          JSON.stringify({ matricula: null, nome: nome, senha: senha }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

}
