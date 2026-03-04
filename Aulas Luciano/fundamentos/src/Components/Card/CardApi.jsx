import { useEffect, useState } from "react"
import styles from "./CardApi.module.css"
import Card from "./Card"

// export const CardApi = () => {

//     // let contador = 0
//     const [contador, setContador] = useState(0)

//     const incrementaValor = () => {
//         setContador(prev => prev + 1)
//         console.log("contador", contador)
//     }
    
  
//     return (
//     <>
//         <p>{contador}</p>
//         <button onClick={incrementaValor}>Add</button>
//     </>
//   )
// }

export const CardApi = () => {

    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setUsers(data))

    }, [])
    console.log(users)

    return (
    <>
        <div className={styles.cardContainerApi}>
            {
                users.map((user) =>(
                    <div className={styles.card} key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Rua: {user.address?.street}</p>
                        <p>Complemento: {user.address?.suite}</p>
                        <p>{user.address.geo.lat}</p>
                        <p>{user.address.geo.lng}</p>
                    </div>
                ))
            }
        </div>
    </>
  )
}
