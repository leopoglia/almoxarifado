package br.senai.sc.almoxarifado.model.entities;

import br.senai.sc.almoxarifado.model.Factory.*;

public class Reserva {
    private Integer idReserva;
    private String dataRetirada;
    private String dataDevolucao;
    private Integer idPessoa;

    public static Reserva cadastrar(Integer idReserva, String dataRetirada, String dataDevolucao, Integer idPessoa){
        return new ReservaFactory().getReserva(idReserva, dataRetirada, dataDevolucao, idPessoa);
    }

    @Override
    public String toString() {
        return "\nidReserva: " + idReserva +
                "\ndataRetirada: " + dataRetirada +
                "\ndataDevolucao: " + dataDevolucao +
                "\nidPessoa: " + idPessoa;
    }

    public Reserva(Integer idReserva, String dataRetirada, String dataDevolucao, Integer idPessoa) {
        this.idReserva = idReserva;
        this.dataRetirada = dataRetirada;
        this.dataDevolucao = dataDevolucao;
        this.idPessoa = idPessoa;
    }

    public Integer getIdPessoa() {
        return idPessoa;
    }

    public void setIdPessoa(Integer idPessoa) {
        this.idPessoa = idPessoa;
    }

    public Integer getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(Integer idReserva) {
        this.idReserva = idReserva;
    }

    public String getDataRetirada() {
        return dataRetirada;
    }

    public void setDataRetirada(String dataRetirada) {
        this.dataRetirada = dataRetirada;
    }

    public String getDataDevolucao() {
        return dataDevolucao;
    }

    public void setDataDevolucao(String dataDevolucao) {
        this.dataDevolucao = dataDevolucao;
    }
}
