package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.Factory.*;
import br.senai.sc.almoxarifado.model.entities.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class LocalizacaoDAO {
    private Connection connection;

    public LocalizacaoDAO() {
        this.connection = new ConexaoFactory().conectaBD();
    }

    public void cadastrar(Localizacao localizacao) throws SQLException {
        String sql = "insert into localizacao(codigo, localidade) values (?,?)";

        try(PreparedStatement statement = connection.prepareStatement(sql)){
            statement.setInt(1, localizacao.getIdLocalizacao());
            statement.setString(2, localizacao.getLocalidade());
            try{
                statement.execute();
            }catch (Exception exception){
                throw new RuntimeException("Erro na execucao");
            }
        }catch (Exception exception){
            throw new RuntimeException("Erro na preparacao");
        }
    }
}
