import { createUser } from "../src/userService"

const user = {
    id: Math.floor(Math.random(1,10)),
    name: "teste",
    age: 18,
    isActive: true,
    roles: ['user']

}
const user2 = {
    id: Math.floor(Math.random(1,10)),
    name: "gustavo",
    age: 15,
    isActive: true,
    roles: ['user']
}

describe("Suíte de testes de Usuário", () => {
    
    test("Deve lançar erro quando o nome estiver faltando", () => {
        const userSemNome = {
            id: 1,
            name: "", // Nome vazio para disparar o erro
            age: 20,
            isActive: true,
            roles: ['user']
        };
        expect(() => createUser(userSemNome)).toThrow("O nome de usuário é obrigatório");
    });

    test("Deve lançar erro quando o usuário for menor de idade", () => {
        const userMenorIdade = {
            id: 2,
            name: "Gustavo",
            age: 15, // Menor que 18
            isActive: true,
            roles: ['user']
        };
        expect(() => createUser(userMenorIdade)).toThrow("O usuário deve ser maior de idade");
    });
})

