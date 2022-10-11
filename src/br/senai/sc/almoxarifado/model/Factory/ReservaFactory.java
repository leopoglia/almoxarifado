package br.senai.sc.almoxarifado.model.Factory;

import br.senai.sc.almoxarifado.model.entities.Reserva;

public class ReservaFactory {
    public Reserva getReserva(Integer idReserva, String dataRetirada, String dataDevolucao, Integer idPessoa){
        return new Reserva(idReserva, dataRetirada, dataDevolucao, idPessoa);
    }
}
