import { createUser } from "../src/userService"

const objSemNome = {
    age: 18,
    isActive: true,
    roles: ["teste"]
}
const menorIdade = {
    name: "test",
    age: 15,
    isActive: true,
    roles: ["teste"]
}

describe("testes de userService", ()=> {
    test("usuário não tem nome", () => {
        try {
            createUser(objSemNome)

            throw new Error("Teste falhou porque a função não deu erro");
            
        } catch (error) {
           expect(error.message).toBe("O nome de usuário é obrigatório")
        }
    })
    test("Usuário menor de idade", ()=> {
        expect(menorIdade.age)
    })
})