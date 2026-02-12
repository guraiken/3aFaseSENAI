import { pool } from "./config.js";

export async function buscarLivroPorId(livroId) {
    const [rows] = await pool.query('SELECT * FROM livros WHERE id=?', 
        [livroId]
    )
    console.log(rows)
    return rows[0]
}

export async function viewLivros() {
    const [rows] = await pool.query('SELECT * FROM vw_livros')
    console.log(rows)
    return rows
}

export async function insertLivros(titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo) {
    const [rows] = await pool.query('INSERT INTO livros(titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo) VALUES (?, ?, ?, ?, ?)',
        [titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo]
    )
        console.log(rows)
        return rows
}

export async function livrosMaiorSaidaNoPeriodo(dataInicial, dataFinal) {
    const [rows] = await pool.query(`SELECT l.id AS livro_id, 
        l.titulo AS livro, 
        l.valor_unitario, 
        m.quantidade_total_saida 
        FROM livros l 
        LEFT JOIN 
        ( SELECT livro_id, SUM(quantidade) AS quantidade_total_saida 
         FROM movimentacoes 
         WHERE tipo = 'SAIDA' 
         AND data_movimentacao 
         BETWEEN ? AND ? 
         GROUP BY livro_id ) m ON m.livro_id = l.id 
         ORDER BY m.quantidade_total_saida DESC`,
        [dataInicial, dataFinal]);
    return rows.map((item) => {
        const quantidade = item.quantidade_total_saida; 
        const valorUnitario = item.valor_unitario;
        return { 
            livro: item.livro, 
            quantidade_total_saida: quantidade, 
            valor_total_financeiro_saidas: quantidade * valorUnitario 
        };
    });
} 