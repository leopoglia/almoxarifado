import { Injectable } from '@angular/core';
import { E } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  criarUsuarios(matricula, email, senha, nome, imagem) {
    return new Promise((resolvido, rejeitado) => {
      fetch('http://localhost:3000/api/criar_usuario', {
        method: 'POST',
        body: 
        JSON.stringify({matricula: matricula, email: email, senha: senha, nome: nome, imagem: imagem}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarUsuarios(){
    return new Promise((resolvido, rejeitado) => {
      fetch('http://localhost:3000/api/buscar_usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  login(nome, senha){
    return new Promise((resolvido, rejeitado) => {
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body:JSON.stringify({nome: nome, senha: senha}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

  buscarUsuarioEspecifico(nome){
    return new Promise((resolvido, rejeitado) => {
      fetch('http://localhost:3000/api/buscar_usuario_especifico', {
        method: 'POST',
        body:
        JSON.stringify({nome: nome}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

}
