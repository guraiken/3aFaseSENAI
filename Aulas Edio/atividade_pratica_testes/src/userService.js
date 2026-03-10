export const createUser = (userData) => {
    if(!userData || !userData.name) {
        throw new Error ('O nome de usuário é obrigatório')
    }else if(userData.age < 18){
        throw new Error('O usuário deve ser maior de idade')
    }

    const user = {
    id: Math.floor(Math.random(1,10)),
    name: userData.name,
    age: userData.age,
    isActive: userData.true,
    roles: ['user']

}
return user
} 
