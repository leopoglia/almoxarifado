import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {



  constructor() { }

  buscarProdutos() {
    return new Promise((resolvido, rejeitado) => {

      fetch('http://localhost:3000/api/buscar_produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }
}