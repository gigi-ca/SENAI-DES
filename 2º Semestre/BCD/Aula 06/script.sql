SELECT * FROM clientes_loja WHERE cidade = 'São Paulo';

SELECT * FROM clientes_loja WHERE status = 'ativo';

SELECT * FROM clientes_loja WHERE idade > 40;

SELECT * FROM clientes_loja 
WHERE renda_mensal 
BETWEEN '3000' AND '5000';

SELECT * FROM clientes_loja WHERE data_cadastro > "2025-01-01";

SELECT * FROM clientes_loja WHERE email LIKE '%@%';



SELECT * FROM clientes_loja ORDER BY nome ASC;

SELECT * FROM clientes_loja ORDER BY renda_mensal DESC;

SELECT * FROM clientes_loja 
WHERE cidade = 'Curitiba'
ORDER BY idade ASC;

SELECT * FROM clientes_loja 
WHERE status = 'ativo'
ORDER BY data_cadastro ASC;



SELECT nome AS "Nome Completo",
idade AS "Idade(Anos)",
cidade AS "Cidade"
FROM clientes_loja;

SELECT nome AS "Nome Completo",
renda_mensal AS "Renda(R$)",
status AS "Situação"
FROM clientes_loja;



SELECT * FROM clientes_loja LIMIT 5;

SELECT * FROM clientes_loja WHERE status = 'ativo'
LIMIT 10;

SELECT * FROM clientes_loja WHERE id LIMIT 10 OFFSET 10;

SELECT * FROM clientes_loja ORDER BY data_cadastro DESC
LIMIT 5;



SELECT * FROM clientes_loja WHERE status= 'ativo' AND idade < 30;

SELECT * FROM clientes_loja WHERE cidade = 'São Paulo' OR cidade = 'Rio de Janeiro';

SELECT * FROM clientes_loja WHERE email LIKE '%@%' AND renda_mensal > '6000';

SELECT * FROM clientes_loja WHERE (status = 'pendente' OR status = 'inativo') AND idade > 50;