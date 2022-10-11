package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.Factory.*;
import br.senai.sc.almoxarifado.model.entities.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class ReservaDAO {

    private Connection connection;

    public ReservaDAO() {
        this.connection = new ConexaoFactory().conectaBD();
    }
    Set<Reserva> listaReservas = new HashSet<>();

    public void cadastrar(Reserva reserva) throws SQLException {
        String sql = "insert into reserva(codigo, data_retirada, data_devolucao, codigo_pessoa) values (?,?,?,?)";
        try(PreparedStatement statement = connection.prepareStatement(sql)){
            statement.setInt(1, reserva.getIdReserva());
            statement.setString(2, reserva.getDataRetirada());
            statement.setString(3, reserva.getDataDevolucao());
            statement.setInt(4, reserva.getIdPessoa());
            try{
                statement.execute();
            }catch (Exception exception){
                throw new RuntimeException("Erro na execucao");
            }
        }catch (Exception exception){
            throw new RuntimeException("Erro na preparacao");
        }
    }

    public Set<Reserva> buscarTodos() throws SQLException {
        String sql = "select * from reserva";
        try(PreparedStatement statement = connection.prepareStatement(sql)){
            try(ResultSet resultSet = statement.executeQuery()){
                while (resultSet.next()){
                    listaReservas.add(extrairObjeto(resultSet));
                }
                return listaReservas;
            }catch (Exception exception){
                throw new RuntimeException("Erro na execucao");
            }
        }catch (Exception exception){
            throw new RuntimeException("Erro na preparacao");
        }
    }

    private Reserva extrairObjeto(ResultSet resultSet) {
        try{
            return new ReservaFactory().getReserva(
              resultSet.getInt("codigo"),
              resultSet.getString("data_retirada"),
              resultSet.getString("data_devolucao"),
              resultSet.getInt("codigo_pessoa")
            );
        }catch (Exception exception){
            throw new RuntimeException();
        }
    }
}
