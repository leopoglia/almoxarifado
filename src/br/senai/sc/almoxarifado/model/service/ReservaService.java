package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.ReservaDAO;
import br.senai.sc.almoxarifado.model.entities.Reserva;

import java.sql.SQLException;
import java.util.Set;

public class ReservaService {
    public void inserir(Reserva reserva) throws SQLException {
        new ReservaDAO().cadastrar(reserva);
    }
    public Set<Reserva> buscarTodos() throws SQLException{
        return new ReservaDAO().buscarTodos();
    }
}
