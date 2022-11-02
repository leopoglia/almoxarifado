import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReservaService {
    url: string = "http://localhost:8080/api"

    criarReserva(produtos, dataRetirada, dataDevolucao, horaRetirada, horaDevolucao, usuario) {

        let produtoFinal = [];

        for (let i = 0; i < produtos.length; i++) {
            produtoFinal.push({ produto: { codigo: produtos[i].codigo }, quantidade: produtos[i].quantidade, devolvido: false });
        }

        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/reservas', {
                method: 'POST',
                body:
                    JSON.stringify({ dataRetirada: dataRetirada, dataDevolucao: dataDevolucao, horaRetirada: horaRetirada, horaDevolucao: horaDevolucao, usuario: { codigo: usuario }, produtos: produtoFinal }),
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

    buscarProdutoReserva(codigo) {
        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/produtoreserva/' + codigo, {
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
