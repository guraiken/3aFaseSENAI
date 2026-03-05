// Exercício 3 — Validador de Parênteses
// Enunciado
// Verifique se uma expressão possui parênteses balanceados:
// ((a+b)*c)

function validarBalanceamento(expressao) { // O(n)

    const pilha = []
    const pares = {
        "]": "[",
        ")": "(",
        "}": "{"
    }

    const quemAbre = new Set(["(", "[", "{"])

    for(const caractere of expressao){
        if(quemAbre.has(caractere)) pilha.push(caractere)
        else if(caractere in pares){
            if(pilha.lenght === 0) return false
            const topo = pilha.pop()
            if(topo !== pares[caractere]) return false
        }
    }
    return pilha.length === 0
}

// console.log(validarBalanceamento("((a+b)*c)"))

////////////////////////////////////////////////////////////


function validarBalanceamentoConstante(expressao) { 

    const pilha = []
    let topoPilha = 0
    const pares = {
        "]": "[",
        ")": "(",
        "}": "{"
    }

    const quemAbre = new Set(["(", "[", "{"])

    for(const caractere of expressao){
        if(quemAbre.has(caractere)) {
            pilha[topoPilha] = caractere
            topoPilha++
        }
        else if(caractere in pares){
            if(pilha.lenght === 0) return false
            topoPilha--
            const topo = pilha[topoPilha]
            pilha[topoPilha] = undefined
            if(topo !== pares[caractere]) return false
        }
    }
    return topoPilha === 0
}

console.log(validarBalanceamentoConstante("((a+b)*c)"))