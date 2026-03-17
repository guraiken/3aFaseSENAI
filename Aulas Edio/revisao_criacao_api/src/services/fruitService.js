

class FruitService {

    constructor(array){
       this.fruits = array
    }
    getAll() {
        return fruits
    }
    getById(id) {
        return frutas.find((fruit) => fruit.id === parseInt(id))
    }

    post(fruit){
        this.fruits.push(fruit)
    }
}



export const fruitService = new FruitService([
    {id: 1, nome: "Morango"},
    {id: 2, nome: "Abacaxi"}
])