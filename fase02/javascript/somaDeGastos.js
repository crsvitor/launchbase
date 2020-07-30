//challenge 1-3
//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-3-funcoes-e-estruturas-de-repeticao.md

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];


function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas);
    const somaDespesas = somaNumeros(despesas);

    return somaReceitas - somaDespesas;
}

function somaNumeros(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}

for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}

// feito do meu jeito originalmente
// function calculaSaldo(usuario) {

//     let receita = 0;
//     for (let i = 0; i < usuario.receitas.length; i++) {
//         receita += usuario.receitas[i];
//     }
    
//     let despesa = 0;
//     for (let i = 0; i < usuario.despesas.length; i++) {
//         despesa += usuario.despesas[i];  
//     } 
    
//     const total = receita - despesa;
    
//     if (total>0){
//         console.log(`${usuario.nome} possui de saldo positivo de ${total.toFixed(2)}`);
//     } else {
//         console.log(`${usuario.nome} possui de saldo negativo de ${total.toFixed(2)}`);
//     }
    
//     }

// for (const usuario of usuarios) {
// const calcular = calculaSaldo(usuario);
// }
    
