import Card from "../../Components/Card/Card"
import { CardApi } from "../../Components/Card/CardApi"
import styles from "./Body.module.css"

function Body() {
    const usuarios = [
        {nome: "Gustavo", idade: 20, cidade: "SC"},
        {nome: "Biroliro", idade: 40, cidade: "SC"},
        {nome: "Paulo", idade: 35, cidade: "SP"},
    ]


  return (
    <main className={styles.body}>
        <h2>Usuários cadastrados</h2>
        <div className={styles.cardContainer}>
            {usuarios.map((usuario, index) => (
                <Card
                    key={index}
                    nome={usuario.nome}
                    idade={usuario.idade}
                    cidade={usuario.cidade}
                />
            ))}
        </div>

        <h3>Usuários vindos da API:</h3>
        <CardApi/>
    </main>
  )
}

export default Body