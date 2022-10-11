package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.Factory.*;
import br.senai.sc.almoxarifado.model.entities.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class UsuarioDAO {

    private Connection connection;
    Set<Usuario> listaUsuarios = new HashSet<>();
    Set<Usuario> listaProfessores = new HashSet<>();

    public UsuarioDAO() {
        this.connection = new ConexaoFactory().conectaBD();
    }

    public void cadastrar(Usuario usuario) throws SQLException {
        String sql = "insert into usuario(codigo, matricula, email, senha, cargo, nome) values (?,?,?,?,?,?)";
        try(PreparedStatement statement = connection.prepareStatement(sql)){
            statement.setInt(1, usuario.getIdUsuario());
            statement.setInt(2, usuario.getMatricula());
            statement.setString(3, usuario.getEmail());
            statement.setString(4, usuario.getSenha());
            statement.setString(5, usuario.getCargo());
            statement.setString(6, usuario.getNome());
            try{
                statement.execute();
            }catch (Exception exception){
                throw new RuntimeException("Erro na execução");
            }
        }catch (Exception exception){
            throw new RuntimeException("Erro na preparação");
        }
    }

    public Set<Usuario> buscarTodos() throws SQLException {
        String sql = "select * from usuario";
        try(PreparedStatement statement = connection.prepareStatement(sql)){
            try(ResultSet resultSet = statement.executeQuery()){
                while (resultSet.next()){
                    listaUsuarios.add(extrairObjeto(resultSet));
                }
                return listaUsuarios;
            }catch (Exception exception){
                throw new RuntimeException("Erro na execução");
            }
        }catch (Exception exception){
            throw new RuntimeException("Erro na preparação");
        }
    }

    public Set<Usuario> buscarPorCargo(String cargo) throws SQLException {
        String sql = "select * from usuario where cargo = ?";
        try(PreparedStatement statement = connection.prepareStatement(sql)){
            statement.setString(1, cargo);
            try(ResultSet resultSet = statement.executeQuery()){
                while (resultSet.next()){
                    listaProfessores.add(extrairObjeto(resultSet));
                }
                return listaProfessores;
            }catch (Exception exception){
                throw new RuntimeException("Erro na execução");
            }
        }catch (Exception exception){
            throw new RuntimeException("Erro na prearação");
        }
    }

    private Usuario extrairObjeto(ResultSet resultSet) {
        try{
            return new UsuarioFactory().getUsuario(
                    resultSet.getInt("codigo"),
                    resultSet.getInt("matricula"),
                    resultSet.getString("email"),
                    resultSet.getString("senha"),
                    resultSet.getString("nome"),
                    resultSet.getString("cargo")
            );
        }catch (Exception exception){
            throw new RuntimeException();
        }
    }

}
