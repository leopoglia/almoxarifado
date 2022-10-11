package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.model.service.*;

import java.sql.SQLException;
import java.util.Set;

public class ReservaController {
    public void cadastrar(Integer idReserva, String dataRetirada, String dataDevolucao, Integer idPessoa) throws SQLException {
        ReservaService service = new ReservaService();
        Reserva reserva = Reserva.cadastrar(idReserva, dataRetirada, dataDevolucao, idPessoa);
        service.inserir(reserva);
    }
    public Set<Reserva> buscarTodos() throws SQLException{
        ReservaService service = new ReservaService();
        return service.buscarTodos();
    }
}
