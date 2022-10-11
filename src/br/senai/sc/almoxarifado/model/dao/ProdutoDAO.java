package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.Factory.ConexaoFactory;
import br.senai.sc.almoxarifado.model.Factory.ProdutoFactory;
import br.senai.sc.almoxarifado.model.entities.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class ProdutoDAO {
    private static final Set<Produto> listaProdutos = new HashSet<>();
    private Connection connection;

    public ProdutoDAO() {
        this.connection = new ConexaoFactory().conectaBD();
    }

    public void cadastrar(Produto produto) throws SQLException{
        String sql = "insert into produto(codigo, nome, caracteristica, quantidade, ultima_retirada, descartavel, detalhes, imagem, codigo_localizacao, codigo_classificacao) values (?,?,?,?,?,?,?,?,?,?)";
        try(PreparedStatement statement = connection.prepareStatement(sql)){
            statement.setInt(1, produto.getIdProduto());
            statement.setString(2, produto.getNome());
            statement.setString(3, produto.getCaracteristica());
            statement.setInt(4, produto.getQuantidade());
            statement.setString(5, produto.getUltimaRetirada());
            statement.setBoolean(6, produto.isDescartavel());
            statement.setString(7, produto.getDetalhes());
            statement.setString(8, produto.getImagem());
            statement.setInt(9, 222);
            statement.setInt(10, 222);
            try{
                statement.execute();
            }catch (Exception exception){
                throw new RuntimeException("Erro na execucao");
            }
        }catch (Exception exception){
            throw new RuntimeException("Erro na preparacao");
        }
    }

    public Set<Produto> buscarTodos() throws SQLException{
        String sql = "select * from produto";
        try(PreparedStatement statement = connection.prepareStatement(sql)){
            try(ResultSet resultSet = statement.executeQuery()){
                while(resultSet.next()){
                    listaProdutos.add(extrairObjeto(resultSet));
                }
                return listaProdutos;
            }catch(Exception exception){
                throw new RuntimeException("Erro na execucao!");
            }
        }catch (Exception exception){
            throw new RuntimeException("Erro na preparacao!");
        }
    }

    private Produto extrairObjeto(ResultSet resultSet) {
        try{
            return new ProdutoFactory().getProduto(
                    resultSet.getInt("codigo"),
                    resultSet.getString("nome"),
                    resultSet.getString("caracteristica"),
                    resultSet.getInt("quantidade"),
                    resultSet.getString("ultima_retirada"),
                    resultSet.getBoolean("descartavel"),
                    resultSet.getString("detalhes"),
                    resultSet.getString("imagem")
            );
        }catch (Exception exception){
            throw new RuntimeException();
        }
    }

}
