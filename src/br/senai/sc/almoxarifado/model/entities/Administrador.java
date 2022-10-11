package br.senai.sc.almoxarifado.model.entities;

public class Administrador extends Usuario{

    public Administrador(Integer idUsuario, Integer matricula, String email, String senha, String nome, String cargo) {
        super(idUsuario, matricula, email, senha, nome, cargo);
    }
}
