// Criar um programa que calcula a média 
// das notas entre os alunos e envia
// mensagem do cálculo da média.
// se a média for maior que 5, parabenizar a turma

// uma coleção de objetos - arrays
const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 9.8
    },    
    {
        nome: "Diego",
        nota: 10
    },    
    {
        nome: "Robert",
        nota: 2
    }
    
]

const alunosDaTurmaB = [
    {
        nome: "Jorge",
        nota: 10
    },    
    {
        nome: "Danilson",
        nota: 1
    },    
    {
        nome: "Jorel",
        nota: 2
    },
    {
        nome: "Raul",
        nota: 10
    }
    
]

function calcularMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma += alunos[i].nota        
    }
    const media = soma / alunos.length;
    return media
}

const turmaA = calcularMedia(alunosDaTurmaA);
const turmaB = calcularMedia(alunosDaTurmaB);

function enviarMensagem(media, turma) {
    if (media>5) {
        console.log(`${turma} aprovada com media de ${media}`)
    } else {
        console.log(`${turma} reprovada com media de ${media}`)
    }
}

//marcar aluno reprovado se nota menor 5 e enviar mensagem.
function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if(aluno.nota < 5){
        aluno.reprovado = true;
    }
}

function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado){
        console.log(`${aluno.nome} está reprovado`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);        
    }
}

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3;
console.log(media);

if (media>5) {
    console.log("aprovado")
} else {
    console.log("reprovado")
}

alunoReprovado(alunosDaTurmaA);
alunoReprovado(alunosDaTurmaB);

enviarMensagem(turmaA, "Turma A");
enviarMensagem(turmaB, "Turma B");



