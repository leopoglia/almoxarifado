import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    url: string = "localhost:8080/api"

    criarReserva(dataRetirada, dataDevolucao, usuario, produtos) {
        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/reservas', {
                method: 'POST',
                body:
                    JSON.stringify({ dataRetirada: dataRetirada, dataDevolucao: dataDevolucao, usuario: usuario, produtos: produtos }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resultado => resultado.json())
                .then(resolvido)
                .catch(rejeitado);
        })
    }
}
