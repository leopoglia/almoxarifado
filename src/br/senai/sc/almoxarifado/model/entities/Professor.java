package br.senai.sc.almoxarifado.model.entities;

public class Professor extends Usuario{
    public Professor(Integer idUsuario, Integer matricula, String email, String senha, String nome, String cargo) {
        super(idUsuario, matricula, email, senha, nome, cargo);
    }
}
