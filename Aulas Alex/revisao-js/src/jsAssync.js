
function processoBolo(tempo){
    return new Promise((resolve, reject) => {
        
        if (tempo < 30){
            reject("Você deixou pouco tempo o bolo no forno, agora ele está cru")
        }
        else if (tempo > 40){
            reject("O bolo ficou tempo demais no forno, virou carvão")
        } else {
            resolve("O bolo foi assado com successo!")
        }
    })
}

function getRng(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)); 
}


function numeroAleatorio(){
    return new Promise((resolve, reject) => {
        let randomNum = getRng(1,20)

        if(randomNum > 5){
            resolve(`Seu número é ${randomNum}, parabéns você passou.`)
        }else{
            reject(`Seu número foi ${randomNum}, e por isso você não merece passar. \n`)
        }
    })
}


processoBolo(31)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error("Deu ruim com o bolo \n" + erro))
    .finally(console.log("O tempo acabou, você fez sua decisão, Deus sabe o que você fez"))

numeroAleatorio()
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(`Cara, tu merece o pior ${erro}`))
    .finally(console.log('Encerrando..'))
