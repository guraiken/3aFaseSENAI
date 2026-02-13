import { pool } from "./config.js";

export async function getProdutos(){
    const [rows] = await pool.query('SELECT * FROM produto_limpeza')
    console.log(rows)
    return [rows]
}

export async function cadastrarNovos(nome, tipo, valor_unitario, estoque_minimo, estoque_maximo){
    const [rows] = await pool.query(`INSERT INTO produto_limpeza
        (nome, tipo, valor_unitario, estoque_minimo, estoque_maximo)
        VALUES
        (?, ?, ?, ?, ?)
        `, [nome, tipo, valor_unitario, estoque_minimo, estoque_maximo]
    )
    console.log(rows)
    return rows
}

export async function registrarEntrada(produto_limpeza_id, tipo_movimentacao, quantidade, data_movimentacao){
    const [rows] = await pool.query(
        `
        INSERT INTO estoque
        (produto_limpeza_id, tipo_movimentacao, quantidade, data_movimentacao)
        VALUES
        (?, ?, ?, ?)`, [produto_limpeza_id, tipo_movimentacao, quantidade, data_movimentacao]) 
        console.log(rows)
        return rows

}

export async function produtoDataInicialFinal(dataInicial, dataFinal) {
    const [rows] = await pool.query(`SELECT 
        nome, 
        valor_unitario, 
        estoque.quantidade_total_saida 
        FROM produto_limpeza 
        LEFT JOIN 
        ( SELECT produto_limpeza_id, SUM(quantidade) AS quantidade_total_saida 
         FROM estoque 
         WHERE tipo_movimentacao = 'SAIDA' 
         AND data_movimentacao 
         BETWEEN ? AND ? 
         GROUP BY produto_limpeza_id ) estoque ON estoque.produto_limpeza_id = produto_limpeza.id 
         ORDER BY estoque.quantidade_total_saida DESC`,
        [dataInicial, dataFinal]);
    return rows.map((item) => {
        const quantidade = item.quantidade_total_saida; 
        const valorUnitario = item.valor_unitario;
        return{ 
            livro: item.livro, 
            quantidade_total_saida: quantidade, 
            valor_total_financeiro_saidas: quantidade * valorUnitario 
        };
    });
} 

export async function relatorioDataInicialFinal(dataInicial, dataFinal) {
    const [rows] = await pool.query(`SELECT nome, valor_unitario,
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
        BETWEEN ? AND ?
        GROUP BY produto_limpeza.id
         `,
        [dataInicial, dataFinal]);
        return rows
} 

export async function viewEstoque(){
    const [rows] = await pool.query("SELECT * FROM vw_estoque")
    console.log(rows)
    return rows
}

export async function saidaProdutos(){
    const [rows] = await pool.query("SELECT * FROM saida_produtos")
    console.log(rows)
    return rows
}

export async function produtoMaximoMinimo(){
    const [rows] = await pool.query("SELECT * FROM produto_maximo_minimo")
    console.log(rows)
    return rows
}


