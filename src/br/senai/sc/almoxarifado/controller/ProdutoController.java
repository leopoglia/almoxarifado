package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.service.*;

import java.sql.Blob;
import java.sql.SQLException;
import java.util.Set;

public class ProdutoController {
    public void cadastrar(Integer idProduto, String nome, String caracteristica, Integer quantidade, String ultimaRetirada, boolean descartavel, String detalhes, String imagem) throws SQLException {
        ProdutoService service = new ProdutoService();
        Produto produto = Produto.cadastrar(idProduto, nome, caracteristica, quantidade, ultimaRetirada, descartavel, detalhes, imagem);
        service.inserir(produto);
    }
    public Set<Produto> buscarTodos() throws SQLException{
        ProdutoService service = new ProdutoService();
        return service.buscarTodos();
    }
}
