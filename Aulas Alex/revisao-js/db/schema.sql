CREATE DATABASE IF NOT EXISTS empresa_limpeza;

USE empresa_limpeza;

CREATE TABLE produto_limpeza(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    tipo VARCHAR(150) NOT NULL,
    valor_unitario DECIMAL(10,2) NOT NULL,
    estoque_minimo INT NOT NULL DEFAULT 0,
    estoque_maximo INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE estoque(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    produto_limpeza_id INT NOT NULL,
    tipo_movimentacao ENUM ('ENTRADA', 'SAIDA') NOT NULL,
    quantidade INT NOT NULL,
    data_movimentacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_produto_limpeza_estoque
		FOREIGN KEY(produto_limpeza_id) REFERENCES produto_limpeza(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

INSERT INTO produto_limpeza
(nome, tipo, valor_unitario, estoque_minimo, estoque_maximo)
VALUES
('Limpa Vidros Marca Bumbum de Neném', "Limpa Vidros", 16.99, 1, 40),
('Sabonete Dove Suave', "Sabonete", 5, 6.50, 50),
('Água Sanitária QBOA', "Água Sanitária", 10, 21.28, 30);

INSERT INTO estoque
(produto_limpeza_id, tipo_movimentacao, quantidade, data_movimentacao)
VALUES
(1, 'ENTRADA', 1, '2026-01-04 10:00:00'),
(2, 'ENTRADA', 10, '2026-01-05 10:00:00'),
(2, 'SAIDA', 5, '2026-01-06 12:30:00'),
(3, 'ENTRADA', 10, '2026-01-07 10:30:00'),
(3, 'SAIDA', 3, '2026-01-15 18:00:00');

CREATE VIEW vw_estoque AS
SELECT nome, tipo, valor_unitario,
SUM(
CASE
	WHEN estoque.tipo_movimentacao = "ENTRADA" THEN estoque.quantidade
    WHEN estoque.tipo_movimentacao = "SAIDA" THEN -estoque.quantidade
	ELSE 0
END) AS saldo_estoque,
SUM(
CASE 
	WHEN estoque.tipo_movimentacao = "ENTRADA" THEN estoque.quantidade
    WHEN estoque.tipo_movimentacao = "SAIDA" THEN -estoque.quantidade
	ELSE 0
END) * produto_limpeza.valor_unitario AS valor_total_item
FROM produto_limpeza
LEFT JOIN estoque
ON produto_limpeza.id = estoque.produto_limpeza_id
GROUP BY produto_limpeza.id,
nome,
tipo,
valor_unitario;

CREATE VIEW saida_produtos AS
SELECT nome, tipo, valor_unitario, estoque.data_movimentacao
FROM produto_limpeza
LEFT JOIN estoque
ON produto_limpeza.id = estoque.produto_limpeza_id
WHERE estoque.tipo_movimentacao = "SAIDA"
ORDER BY estoque.data_movimentacao DESC;

CREATE VIEW produto_maximo_minimo AS
SELECT nome, tipo, valor_unitario,
SUM(
CASE
	WHEN estoque.tipo_movimentacao = "ENTRADA" THEN estoque.quantidade
    WHEN estoque.tipo_movimentacao = "SAIDA" THEN -estoque.quantidade
	ELSE 0
END) AS saldo_estoque,
estoque_minimo,
estoque_maximo
FROM produto_limpeza
LEFT JOIN estoque
ON produto_limpeza.id = estoque.produto_limpeza_id
WHERE estoque.quantidade > estoque_maximo
OR estoque.quantidade < estoque_minimo
GROUP BY produto_limpeza.id,
nome,
tipo,
valor_unitario;	

SELECT nome, valor_unitario,
sum(
CASE 
	WHEN estoque.tipo_movimentacao = "ENTRADA" THEN estoque.quantidade
    ELSE 0
END) AS qtd_total_entrada,
sum(CASE
	WHEN estoque.tipo_movimentacao = "SAIDA" THEN estoque.quantidade
    ELSE 0
END) AS qtd_total_saida,
sum(
CASE
	WHEN estoque.tipo_movimentacao = "ENTRADA" THEN estoque.quantidade
    ELSE 0
END) * produto_limpeza.valor_unitario AS valor_total_entrada,
sum(
CASE
    WHEN estoque.tipo_movimentacao = "SAIDA" THEN estoque.quantidade
    ELSE 0
END) * produto_limpeza.valor_unitario AS valor_total_saida,
sum(
CASE
	WHEN estoque.tipo_movimentacao = "ENTRADA" THEN estoque.quantidade
    WHEN estoque.tipo_movimentacao = "SAIDA" THEN -estoque.quantidade
    ELSE 0
END) * produto_limpeza.valor_unitario AS saldo_total
FROM produto_limpeza
LEFT JOIN estoque
ON produto_limpeza.id = estoque.produto_limpeza_id
AND data_movimentacao 
BETWEEN '2026-01-04 10:00:00' AND '2026-01-15 18:00:00'
GROUP BY produto_limpeza.id;




