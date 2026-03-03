
export function nome(a) {
    if(a === "Senai"){
        return "Nome correto"
    }else {
        throw  new Error('Nome incorreto')
    }
}