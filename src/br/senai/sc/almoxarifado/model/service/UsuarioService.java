package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.UsuarioDAO;
import br.senai.sc.almoxarifado.model.entities.Usuario;

import java.sql.SQLException;
import java.util.Set;

public class UsuarioService {
    public void inserir(Usuario usuario) throws SQLException {
        new UsuarioDAO().cadastrar(usuario);
    }
    public Set<Usuario> buscarTodos() throws SQLException{
        return new UsuarioDAO().buscarTodos();
    }
    public Set<Usuario> buscarPorCargo(String cargo) throws SQLException{
        return new UsuarioDAO().buscarPorCargo(cargo);
    }
}
