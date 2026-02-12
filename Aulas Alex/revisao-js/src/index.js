import { buscarLivroPorId, insertLivros, viewLivros } from "./bibliotecaService.js";
import { pool } from "./config.js";

async function main(){
    await buscarLivroPorId(1)
    await viewLivros()
    await insertLivros('teste', 'teste', 10.90, 0, 10)
}

main().catch(error=>
    console.error(error)
).finally(async()=> {
    await pool.end()
})