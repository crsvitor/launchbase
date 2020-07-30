<<<<<<< HEAD
//challenge 1-2
//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md
//desafio objetos e vetores(arrays) 

//imprimir propriedades do objeto
const empresa = {
    Nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programação",
    Endereço: {
        Rua: "Rua Guilherme Gembala",
        Número: 260
    }
};

console.log(`A empresa ${empresa.Nome} está localizada em ${empresa.Endereço.Rua}, ${empresa.Endereço.Número}`);

const programador = [
    {
        nome: "Carlos",
        idade: 32,
        tecnologia: [{
            nome: "C++",
            especialidade: "Desktop"
        }, {
            nome: "Python",
            especialidade: "Data Science"
        }, {
            nome: 'JavaScript', 
            especialidade: 'Web/Mobile'
        }]    
    }
]

console.log(`O usuário ${programador[0].nome} tem ${programador[0].idade} anos e usa a tecnologia ${programador[0].tecnologia[0].nome} com especialidade em ${programador[0].tecnologia[0].especialidade}`);

//verificar propriedades de um objeto em um array
const usuarios = [
    {
        nome: "Carlos",
        tecnologias: [
            "HTML",
            "CSS"
        ]
    },
    {
        nome: "Jasminie",
        tecnologias: [
            "JasvaScript",
            "CSS"
        ]
    },
    {
        nome: "Tuane",
        tecnologias: [
            "HTML",
            "Node.js"
        ]
    }
]

function checaSeUsuarioUsaCSS(usuario) {
    for(let tecnologia of usuario.tecnologias){
        if (tecnologia == "CSS") return true
    }
    return false
}

for (let i = 0; i < usuarios.length; i ++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}

checaSeUsuarioUsaCSS(usuarios);

// uma forma de checkar tecnologias
// function checaSeUsaCSS(usuarios) { 
//     for (let i = 0; i < usuarios.length; i++) {
//         // element = `${i} ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`;
//         if (usuarios[i].tecnologias[0] === "CSS" || usuarios[i].tecnologias[1] === "CSS") {
//             console.log(`${usuarios[i].nome} trabalha com CSS`);
//         }
//     }  
// }
// checaSeUsaCSS(usuarios);

// imprimi as tecnologias
// for (let i = 0; i < usuarios.length; i++) {
//     const element = `${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`;
//     console.log(element);
// }




=======
//challenge 1-2
//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md
//desafio objetos e vetores(arrays) 

//imprimir propriedades do objeto
const empresa = {
    Nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programação",
    Endereço: {
        Rua: "Rua Guilherme Gembala",
        Número: 260
    }
};

console.log(`A empresa ${empresa.Nome} está localizada em ${empresa.Endereço.Rua}, ${empresa.Endereço.Número}`);

const programador = [
    {
        nome: "Carlos",
        idade: 32,
        tecnologia: [{
            nome: "C++",
            especialidade: "Desktop"
        }, {
            nome: "Python",
            especialidade: "Data Science"
        }, {
            nome: 'JavaScript', 
            especialidade: 'Web/Mobile'
        }]    
    }
]

console.log(`O usuário ${programador[0].nome} tem ${programador[0].idade} anos e usa a tecnologia ${programador[0].tecnologia[0].nome} com especialidade em ${programador[0].tecnologia[0].especialidade}`);

//verificar propriedades de um objeto em um array
const usuarios = [
    {
        nome: "Carlos",
        tecnologias: [
            "HTML",
            "CSS"
        ]
    },
    {
        nome: "Jasminie",
        tecnologias: [
            "JasvaScript",
            "CSS"
        ]
    },
    {
        nome: "Tuane",
        tecnologias: [
            "HTML",
            "Node.js"
        ]
    }
]

function checaSeUsuarioUsaCSS(usuario) {
    for(let tecnologia of usuario.tecnologias){
        if (tecnologia == "CSS") return true
    }
    return false
}

for (let i = 0; i < usuarios.length; i ++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}

checaSeUsuarioUsaCSS(usuarios);

// uma forma de checkar tecnologias
// function checaSeUsaCSS(usuarios) { 
//     for (let i = 0; i < usuarios.length; i++) {
//         // element = `${i} ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`;
//         if (usuarios[i].tecnologias[0] === "CSS" || usuarios[i].tecnologias[1] === "CSS") {
//             console.log(`${usuarios[i].nome} trabalha com CSS`);
//         }
//     }  
// }
// checaSeUsaCSS(usuarios);

// imprimi as tecnologias
// for (let i = 0; i < usuarios.length; i++) {
//     const element = `${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`;
//     console.log(element);
// }




>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
