import { createUser } from "../src/userService"
import { nome } from "./nome"

test('soma de 2 valores', () => {
    expect(2 + 2).toBe(4)
})

const obj1 = {
    nome: 'teste',
    idade: 20
}
const obj2 = {
    nome: 'teste',
    idade: 20
}




test('2 objetos iguais', () => {
    expect(obj1).toEqual(obj2)
})

test('testando função de nomes', () => {
    expect(() => nome('senai').toThrow('Nome inválido'))
})

