package br.senai.sc.almoxarifado.model.Factory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoFactory {
    private String url = "jdbc:mysql://localhost:3306/almoxarifado";
    private String username = "root";
    private String password = "root";
    public Connection conectaBD() {
        try{
            return DriverManager.getConnection(url, username, password);
        }catch (Exception exception){
            throw new RuntimeException("Erro na conexão!");
        }
    }
}