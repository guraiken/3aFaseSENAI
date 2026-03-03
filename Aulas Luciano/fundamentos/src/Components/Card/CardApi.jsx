import { useState } from "react"

export const CardApi = () => {

    // let contador = 0
    const [contador, setContador] = useState(0)

    const incrementaValor = () => {
        setContador(prev => prev + 1)
        console.log("contador", contador)
    }
    
  
    return (
    <>
        <p>{contador}</p>
        <button onClick={incrementaValor}>Add</button>
    </>
  )
}
