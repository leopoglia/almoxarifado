import { Injectable } from '@angular/core';
import { E } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  url: string = 'http://localhost:8080/api';

  constructor() { }

  criarUsuarios(matricula, email, senha, nome, imagem) {
    var formData = new FormData();
    let usuario = { "nome": nome, "email": email, "matricula": matricula, "cargo": "Professor", "senha": senha, "situacao": 2 };
    formData.append('usuario', JSON.stringify(usuario));
    formData.append('imagem', imagem);


    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuario', {
        method: 'POST',
        body: formData,
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  criarUsuariosDentro(nome, email, matricula, cargo, imagem) {
    var formData = new FormData();
    let usuario = { "nome": nome, "email": email, "matricula": matricula, "cargo": cargo, "senha": "Senai123", "situacao": 0 };
    formData.append('usuario', JSON.stringify(usuario));
    formData.append('imagem', imagem);

    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuario', {
        method: 'POST',
        body: formData,
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

  editarUsuario(codigo, matricula, email, senha, nome, cargo) {
    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuario/editar/' + codigo, {
        method: 'PUT',
        body:
          JSON.stringify({ email: email, matricula: matricula, senha: senha, nome: nome, cargo: cargo, situacao: "APROVADO" }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  aceitarUsuario(usuario) {

    console.log(usuario);

    return new Promise((resolvido, rejeitado) => {
      fetch(this.url + '/usuario/aceitar/' + usuario.codigo, {
        method: 'PUT',
        body:
          JSON.stringify({ matricula: usuario.matricula, email: usuario.email, senha: usuario.senha, nome: usuario.nome, imagem: usuario.imagem, cargo: usuario.cargo, situacao: usuario.situacao }),
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
