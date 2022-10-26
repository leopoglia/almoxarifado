import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HistoricoService {

    constructor() { }

    url: string = "localhost:8080/api";

    cadastrarHistorico(motivo, data_alteracao, quantidade_alterada, produto) {
        return new Promise((resolvido, rejeitado) => {
            fetch(this.url + '/historicos', {
                method: 'POST',
                body: JSON.stringify({ motivo: motivo, data_alteracao: data_alteracao, quantidade_alterada: quantidade_alterada, produto: {codigo: produto.codigo} }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resultado => resultado.json())
                .then(resolvido)
                .catch(rejeitado);
        })
    }

    buscarHistorico() {
        return new Promise((resolvido, rejeitado) => {

            fetch(this.url + '/historicos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resultado => resultado.json())
                .then(resolvido)
                .catch(rejeitado);
        })
    }

}