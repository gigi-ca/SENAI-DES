SELECT 
SUM(preco) AS "Total Arrecadado"
FROM locacoes;

SELECT 
SUM(preco) AS "Total Arrecadado"
FROM locacoes WHERE status = "entregue";

SELECT AVG(preco) 
AS preco_medio 
FROM filmes WHERE categoria = "Comédia";

SELECT AVG(preco) 
AS preco_medio 
FROM locacoes WHERE status = "Pendente";

SELECT COUNT(*) AS total_pedidos FROM filmes;

SELECT COUNT(*) AS total_pedidos 
FROM locacoes
WHERE YEAR(data_locacao) = "2025";

SELECT MAX(preco) AS maior_preco FROM filmes;

SELECT MAX(data_locacao) AS mais_recente FROM locacoes;

SELECT MIN(preco) AS menor_preco FROM filmes WHERE categoria = "Terror";

SELECT MIN(data_locacao) AS menos_recente FROM locacoes;

SELECT CONCAT(cliente_id, ' alugou ', filme_id) AS descricao FROM locacoes;

SELECT CONCAT(' Cliente ', cliente_id, ' alugou ', filme_id, ' em ', data_locacao) AS descricao FROM locacoes;

SELECT nome, LENGTH(nome) AS tamanho_nome FROM clientes;

SELECT * FROM filmes WHERE LENGTH(titulo) >15;

SELECT LOWER(titulo) AS titulo_minusculo FROM filmes;

SELECT LOWER(nome) AS nome_minusculo FROM clientes;

SELECT UPPER(nome) AS nome_maiusculo FROM clientes;

SELECT UPPER(categoria) AS categoria_maiusculo FROM filmes;

SELECT ROUND(preco) AS preco_inteiro FROM filmes;

SELECT ROUND(preco, 1) AS valor_arredondado_1 FROM filmes;

SELECT preco, POW(preco, 2) AS preco_ao_quadrado FROM filmes;

SELECT id, POW(2, id) AS dois_elevado_id FROM clientes;

SELECT id, MOD(id, 2) AS par FROM clientes;

SELECT id, MOD(id, 3) AS resto_div_3 FROM filmes;

SELECT NOW() AS data_hora_atual;

SELECT * FROM locacoes WHERE data_locacao < NOW();

SELECT data_locacao, DAY(data_locacao) AS dia FROM locacoes;

SELECT data_locacao, MONTH(data_locacao) AS mes FROM locacoes WHERE MONTH(data_locacao)=3;