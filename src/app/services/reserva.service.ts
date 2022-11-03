import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReservaService {
    url: string = "http://localhost:8080/api"

    criarReserva(produtos, dataRetirada, dataDevolucao, horaRetirada, horaDevolucao, usuario) {

        let produtoFinal = [];

        for (let i = 0; i < produtos.length; i++) {
            produtoFinal.push({ produto: { codigo: produtos[i].codigo }, devolvido: false, quantidade: produtos[i].quantidade });
        }

        console.log(produtoFinal);

        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/reservas', {
                method: 'POST',
                body:
                    JSON.stringify({ visibilidade: true, dataRetirada: dataRetirada, dataDevolucao: dataDevolucao, horaRetirada: horaRetirada, horaDevolucao: horaDevolucao, usuario: { codigo: usuario }, produtos: produtoFinal }),
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

    atualizarReserva(reserva) {

        console.log(reserva);

        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/reservas/' + reserva.codigo, {
                method: 'PUT',
                body:
                    JSON.stringify({ visibilidade: 0, codigo: reserva.codigo, dataRetirada: reserva.dataRetirada, dataDevolucao: reserva.dataDevolucao, usuario: { codigo: reserva.usuario.codigo }, produtos: reserva.produtos, devolvido: reserva.devolvido, horaRetirada: reserva.horaRetirada, horaDevolucao: reserva.horaDevolucao }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resultado => resultado.json())
                .then(resolvido)
                .catch(rejeitado);
        })
    }

    atualizarProdutoReserva(produtoReserva) {


        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/produtoreserva/' + produtoReserva.codigo, {
                method: 'PUT',
                body:
                    JSON.stringify({ "quantidade": produtoReserva.quantidade, produto: { codigo: produtoReserva.produto.codigo }, reserva: { codigo: produtoReserva.reserva.codigo } }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resultado => resultado.json())
                .then(resolvido)
                .catch(rejeitado);
        })
    }

    deletarReserva(codigo) {
        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/reservas/' + codigo, {
                method: 'DELETE'
            }).then(resultado => resultado.json())
                .then(resolvido)
                .catch(rejeitado);
        })
    }

}
