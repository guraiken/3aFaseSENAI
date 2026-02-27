class Queue {

    constructor() {
        this.array = new Array()
        this.tamanho = 0
        this.inicio = 0
        this.final = 0
    }

    enqueue(value) {
        if (value.isEldery) {
            let contador = this.inicio
            while (contador < this.array.length && this.array[contador].isEldery) contador++, this.tamanho++, this.final++
            
            this.array.splice(contador, 0, value)
        }
        else {
            this.array.push(value)
            this.tamanho++
            this.final++
        }
    }

    dequeue() {
        if (this.tamanho === 0) return "Fila vazia"
        const removido = this.array[this.inicio]
        this.array[this.inicio] = undefined
        this.inicio = this.inicio + 1
        this.tamanho = this.tamanho - 1
        return removido;
    }

    mostrarTamanho() {
        return this.array.length
    }
    mostrarFila() {
        return this.array
    }

}

const fila = new Queue();

fila.enqueue({nome:"Ronald", isEldery:false})
fila.enqueue({nome:"Felipe", isEldery:false})
fila.enqueue({nome:"Fred", isEldery:false})

fila.enqueue({nome:"Sebastião", isEldery:true})
fila.enqueue({nome:"Jertrude", isEldery:true})
fila.enqueue({nome:"Terezinha", isEldery:true})
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.enqueue({nome:"Robertolos", isEldery:true})

console.table(fila.mostrarFila())