<<<<<<< HEAD
// challenge 1-1
//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md

// calculo IMC
const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const IMC = peso / (altura*altura);
console.log(IMC);

if (IMC >= 30) {
    console.log(`${nome} você está obeso`)
} else {
    console.log(`${nome} você não está obeso`)
}

// calculo de aposentadoria
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const somaIdadeContribuicao = idade + contribuicao;

// serve para checkar inforamação, é homem, contribução é maior... e ai vai
// não para, se for, fazer tal coisa, pois o retorno daqui é só true or false
const homemCheck = sexo === "M" && contribuicao >= 35 && somaIdadeContribuicao >= 95;
const mulherCheck = sexo === "F" && contribuicao >= 30 && somaIdadeContribuicao >= 85;

if (homemCheck || mulherCheck){
    console.log(`${nome}, você pode se aposentar`)
} else {
     console.log(`${nome}, você ainda não pode se aposentar`)
}

const somaIdadeContribuicao = idade + contribuicao;
const aposentadoriaCheck= sexo === "F" ? somaIdadeContribuicao>85 && contribuicao>30 
                            : somaIdadeContribuicao>95 && contribuicao>35;

if(aposentadoriaCheck){
    console.log(`${nome}, você pode se aposentar`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar`)
}


if (sexo == "F") {
    if (contribuicao >= 30 && idade+contribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    if (contribuicao >= 35 && idade+contribuicao >= 95) {
        console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}
}
=======
// challenge 1-1
//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md

// calculo IMC
const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const IMC = peso / (altura*altura);
console.log(IMC);

if (IMC >= 30) {
    console.log(`${nome} você está obeso`)
} else {
    console.log(`${nome} você não está obeso`)
}

// calculo de aposentadoria
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const somaIdadeContribuicao = idade + contribuicao;

// serve para checkar inforamação, é homem, contribução é maior... e ai vai
// não para, se for, fazer tal coisa, pois o retorno daqui é só true or false
const homemCheck = sexo === "M" && contribuicao >= 35 && somaIdadeContribuicao >= 95;
const mulherCheck = sexo === "F" && contribuicao >= 30 && somaIdadeContribuicao >= 85;

if (homemCheck || mulherCheck){
    console.log(`${nome}, você pode se aposentar`)
} else {
     console.log(`${nome}, você ainda não pode se aposentar`)
}

const somaIdadeContribuicao = idade + contribuicao;
const aposentadoriaCheck= sexo === "F" ? somaIdadeContribuicao>85 && contribuicao>30 
                            : somaIdadeContribuicao>95 && contribuicao>35;

if(aposentadoriaCheck){
    console.log(`${nome}, você pode se aposentar`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar`)
}


if (sexo == "F") {
    if (contribuicao >= 30 && idade+contribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    if (contribuicao >= 35 && idade+contribuicao >= 95) {
        console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}
}
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
