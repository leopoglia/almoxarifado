package br.senai.sc.almoxarifado.model.entities;

import br.senai.sc.almoxarifado.model.Factory.*;

public class Usuario {
    private Integer idUsuario;
    private Integer matricula;
    private String email;
    private String senha;
    private String nome;
    private String cargo;

    @Override
    public String toString() {
        return  "\n+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=\n" +
                "idUsuario=" + idUsuario + "\n" +
                "matricula=" + matricula + "\n" +
                "email='" + email + "\n" +
                "senha='" + senha + "\n" +
                "nome='" + nome + "\n" +
                "cargo='" + cargo +
                "\n+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=\n";
    }

    public static Usuario cadastrar(Integer idUsuario, Integer matricula, String email, String senha, String nome, String cargo){
        return new UsuarioFactory().getUsuario(idUsuario, matricula, email, senha, nome, cargo);
    }

    public Usuario(Integer idUsuario, Integer matricula, String email, String senha, String nome, String cargo) {
        this.idUsuario = idUsuario;
        this.matricula = matricula;
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.cargo = cargo;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public Integer getMatricula() {
        return matricula;
    }

    public void setMatricula(Integer matricula) {
        this.matricula = matricula;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
}
