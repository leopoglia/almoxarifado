import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReservaService {
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

    buscarReservas() {
        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/reservas', {
                method: 'GET'
            }).then(resultado => resultado.json())
                .then(resolvido)
                .catch(rejeitado);
        })
    }

    buscarReserva(codigo) {
        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/reservas/' + codigo, {
                method: 'GET'
            }).then(resultado => resultado.json())
                .then(resolvido)
                .catch(rejeitado);
        })
    }

    atualizarReserva(dataRetirada, dataDevolucao, usuario, produtos) {
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
