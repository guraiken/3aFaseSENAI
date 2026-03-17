const fruits = [
    {id: 1, nome: "Morango"},
    {id: 2, nome: "Abacaxi"}
]

class FruitService {
    getAll() {
        return fruits
    }
    getById(id) {
        return frutas.find((fruit) => fruit.id === parseInt(id))
    }
}

export const fruitService = new FruitService