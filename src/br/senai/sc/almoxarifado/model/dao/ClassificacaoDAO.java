package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.Factory.*;
import br.senai.sc.almoxarifado.model.entities.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ClassificacaoDAO {

    private static Connection connection;

    public ClassificacaoDAO() {
        this.connection = new ConexaoFactory().conectaBD();
    }

    public static void cadastrar(Classificacao classificacao) throws SQLException {
        String sql = "insert into classificacao(codigo, classificacao) values (?,?)";
        try(PreparedStatement statement = connection.prepareStatement(sql)){
            statement.setInt(1, classificacao.getIdClassificacao());
            statement.setString(2, classificacao.getClassificacao());
            try{
                statement.execute();
            }catch (Exception exception){
                throw new RuntimeException("Erro na execução");
            }
        }catch (Exception exception){
            throw new RuntimeException("Erro na preparação");
        }
    }
}
