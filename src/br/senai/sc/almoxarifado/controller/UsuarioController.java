package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.model.service.*;

import java.sql.SQLException;
import java.util.Set;

public class UsuarioController {
    UsuarioService service = new UsuarioService();

    public void cadastrar(Integer idUsuario, Integer matricula, String email, String senha, String nome, String cargo) throws SQLException {
        Usuario usuario = Usuario.cadastrar(idUsuario, matricula, email, senha, nome, cargo);
        service.inserir(usuario);
    }
    public Set<Usuario> buscarTodos() throws SQLException{
        return service.buscarTodos();
    }
    public Set<Usuario> buscarPorCargo(String cargo) throws SQLException{
        return service.buscarPorCargo(cargo);
    }
}
