import { cadastrarNovos, getProdutos, produtoDataInicialFinal, produtoMaximoMinimo, registrarEntrada, relatorioDataInicialFinal, saidaProdutos, viewEstoque } from "./bibliotecaService.js";
import { pool } from "./config.js";

async function main() {
    await getProdutos()
    await registrarEntrada(1, 'ENTRADA', 20, '2026-01-10 20:00:00')
    await cadastrarNovos("Sapólio Industrial Radioativo", "Sapólio", 100, 10, 20)
    console.log(await produtoDataInicialFinal('2026-01-04 10:00:00', '2026-01-15 18:00:00'))
    console.log(await relatorioDataInicialFinal('2026-01-04 10:00:00', '2026-01-15 18:00:00'))
    await viewEstoque()
    await saidaProdutos()
    await produtoMaximoMinimo()
}

main().catch(error=>
    console.error(error)
).finally(async()=> {
    await pool.end()
})