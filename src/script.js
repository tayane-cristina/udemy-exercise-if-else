//Crie um código que envie uma mensagem para o console de acordo com a tabela abaixo

//Ente 00 e 11 - bom dia!
//Entre 12 e 17 - boa tarde!
//Entre 18 e 23 - boa noite!

const horario = 00;

if (horario >= 00 && horario < 12){
    console.log("Bom dia!")
} else if (horario >= 12 && horario < 18){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}