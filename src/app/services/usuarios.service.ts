import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  criarUsuarios(matricula, email, senha, nome) {
    return new Promise((resolvido, rejeitado) => {
      fetch('http://localhost:3000/api/criar_usuario', {
        method: 'POST',
        body: 
        JSON.stringify({matricula: matricula, email: email, senha: senha, nome: nome}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}
