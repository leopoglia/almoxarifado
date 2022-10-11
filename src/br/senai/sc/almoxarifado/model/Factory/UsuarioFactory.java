package br.senai.sc.almoxarifado.model.Factory;

import br.senai.sc.almoxarifado.model.entities.*;

public class UsuarioFactory {
    public Usuario getUsuario(Integer idUsuario, Integer matricula, String email, String senha, String nome, String cargo) {
        if (cargo.equals("Professor")) {
            return new Professor(idUsuario, matricula, email, senha, nome, cargo);
        } else if (cargo.equals("Administrador")) {
            return new Administrador(idUsuario, matricula, email, senha, nome, cargo);
        } else if (cargo.equals("Assistente1")) {
            return new Assistente1(idUsuario, matricula, email, senha, nome, cargo);
        } else {
            return new Assistente2(idUsuario, matricula, email, senha, nome, cargo);
        }
    }
}
