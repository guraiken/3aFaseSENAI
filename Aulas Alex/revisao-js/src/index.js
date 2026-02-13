import { buscarLivroPorId, insertLivros, livrosMaiorSaidaNoPeriodo, viewLivros } from "./bibliotecaService.js";
import { pool } from "./config.js";

async function main(){
    await buscarLivroPorId(1)
    await viewLivros()
    await insertLivros('teste', 'teste', 10.90, 0, 10)
    await livrosMaiorSaidaNoPeriodo('2026-01-03 09:00:00', '2026-01-20 13:15:00')
}

main().catch(error=>
    console.error(error)
).finally(async()=> {
    await pool.end()
})