<<<<<<< HEAD
//chamar o fs e dentro do post escrever o fs
const fs = require('fs');

//chamar data
const data = require("../data.json");

//chamar a function age
const {age, date} = require("../utils");

//chamar o intl
const Intl = require('intl');


//exportar toda informação, só que a informação vai ser dividida
//então de vez ter só um module.exports terá vários

//index
exports.index = function (req, res) {
    return res.render("members/index", { members: data.members }); 
}

//create
exports.create = function (req, res) {
    return res.render("members/create"); 
}

//post
exports.post = function (req, res) {
    //Object é um Constructor, sua ação aqui é
    //pegar as keys do meu req body e transformar em um array 
    const keys = Object.keys(req.body);
    //para depois é possível percorrê-lo num for, verificando antes de mandar 
    //para o banco de dados

    //verificação
    for (const key of keys) {
        if(req.body[key] == "") return res.send("Please, fill all the gaps");
    }

    // //desistruturando
    // let {
    //     avatar_url,
    //     birth,
    //     name,
    //     email,
    //     gender,
    //     blood,
    //     weight,
    //     height
    // } = req.body

    //mudando a atribuição à data de aniversário
    birth = Date.parse(req.body.birth);

    //adicionando um id
    let id= 1;
    const lastMember = data.members[data.members.length - 1];

    if(lastMember) {
        id = lastMember.id + 1
    }

    //jogar informações no array que está dentro do objeto
    data.members.push({
        id,
        ...req.body,
        birth
    });
    
    //primeiro parâmetro é o local de salvamento do arquivo, no caso, data.json
    //segundo a forma como vai ser salva, também é possível escrever com um objeto, por exemplo o JSON.stringify()
    //por fim, uma callback function
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Error, please write again");
        return res.redirect(`/members/${id}`);
    })

    //responsável por requisitar os arquivos no body
    //req.body pois é uma rota post e o corpo da requisição post
    //return res.send(req.body); 
}

//show
exports.show = function(req, res) {
    //req.query.id -> /?id= 
    //req.body -> pega o corpo do formulário através do method POST
    //req.params.id -> /:id  direto na barra /

    //desistruturação:
    const { id } = req.params

    const foundMember = data.members.find(function (member) {
        return member.id == id;
    });

    if(!foundMember) {
        return res.send("Not found");
    }

    let blood = "";

    switch (foundMember.blood) {
        case "A1":
            blood = "A+";
            break;
        case "A0":
            blood = "A-";
            break;
        case "B1":
            blood = "B+";
            break;
        case "B0":
            blood = "B-";
            break;
        case "AB1":
            blood = "AB+";
            break;
        case "AB0":
            blood = "AB-";
            break;
        case "O1":
            blood = "O+";
            break;
        case "O0":
            blood = "O-";
            break;
    }

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).birthDay,
        blood,
        // services: foundMember.services.split(","),
        // created_at: new Intl.DateTimeFormat("pt-BR").format(foundMember.created_at),
    };

    return res.render("members/show", { member });
}

//edit
exports.edit = function (req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function (member) {
        return member.id == id;
    });

    if(!foundMember) {
        return res.send("Not found");
    }

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).iso,
    }

    return res.render('members/edit', { member } );
}

//put
exports.put = function (req, res) {
    const { id } = req.body
    let index = 0;

    const foundMember = data.members.find(function (member, foundIndex) {
        if(member.id == id){
            index = foundIndex;
            return true;
        }
    });

    if(!foundMember) {
        return res.send("Not found");
    }

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    };
    
    data.members[index] = member;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) {
            return res.send("Write error!");
        }
        return res.redirect(`/members/${id}`);
    });
}

//delete
exports.delete = function (req, res) {
    const {id} = req.body;

    const filteredMembers = data.members.filter(function (member) {
       return member.id != id; 
    });

    data.members = filteredMembers;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err){ 
            return res.send("Write file error");
        }
        return res.redirect("/members");
    });
=======
//chamar o fs e dentro do post escrever o fs
const fs = require('fs');

//chamar data
const data = require("../data.json");

//chamar a function age
const {age, date} = require("../utils");

//chamar o intl
const Intl = require('intl');


//exportar toda informação, só que a informação vai ser dividida
//então de vez ter só um module.exports terá vários

//index
exports.index = function (req, res) {
    return res.render("members/index", { members: data.members }); 
}

//create
exports.create = function (req, res) {
    return res.render("members/create"); 
}

//post
exports.post = function (req, res) {
    //Object é um Constructor, sua ação aqui é
    //pegar as keys do meu req body e transformar em um array 
    const keys = Object.keys(req.body);
    //para depois é possível percorrê-lo num for, verificando antes de mandar 
    //para o banco de dados

    //verificação
    for (const key of keys) {
        if(req.body[key] == "") return res.send("Please, fill all the gaps");
    }

    // //desistruturando
    // let {
    //     avatar_url,
    //     birth,
    //     name,
    //     email,
    //     gender,
    //     blood,
    //     weight,
    //     height
    // } = req.body

    //mudando a atribuição à data de aniversário
    birth = Date.parse(req.body.birth);

    //adicionando um id
    let id= 1;
    const lastMember = data.members[data.members.length - 1];

    if(lastMember) {
        id = lastMember.id + 1
    }

    //jogar informações no array que está dentro do objeto
    data.members.push({
        id,
        ...req.body,
        birth
    });
    
    //primeiro parâmetro é o local de salvamento do arquivo, no caso, data.json
    //segundo a forma como vai ser salva, também é possível escrever com um objeto, por exemplo o JSON.stringify()
    //por fim, uma callback function
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Error, please write again");
        return res.redirect(`/members/${id}`);
    })

    //responsável por requisitar os arquivos no body
    //req.body pois é uma rota post e o corpo da requisição post
    //return res.send(req.body); 
}

//show
exports.show = function(req, res) {
    //req.query.id -> /?id= 
    //req.body -> pega o corpo do formulário através do method POST
    //req.params.id -> /:id  direto na barra /

    //desistruturação:
    const { id } = req.params

    const foundMember = data.members.find(function (member) {
        return member.id == id;
    });

    if(!foundMember) {
        return res.send("Not found");
    }

    let blood = "";

    switch (foundMember.blood) {
        case "A1":
            blood = "A+";
            break;
        case "A0":
            blood = "A-";
            break;
        case "B1":
            blood = "B+";
            break;
        case "B0":
            blood = "B-";
            break;
        case "AB1":
            blood = "AB+";
            break;
        case "AB0":
            blood = "AB-";
            break;
        case "O1":
            blood = "O+";
            break;
        case "O0":
            blood = "O-";
            break;
    }

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).birthDay,
        blood,
        // services: foundMember.services.split(","),
        // created_at: new Intl.DateTimeFormat("pt-BR").format(foundMember.created_at),
    };

    return res.render("members/show", { member });
}

//edit
exports.edit = function (req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function (member) {
        return member.id == id;
    });

    if(!foundMember) {
        return res.send("Not found");
    }

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).iso,
    }

    return res.render('members/edit', { member } );
}

//put
exports.put = function (req, res) {
    const { id } = req.body
    let index = 0;

    const foundMember = data.members.find(function (member, foundIndex) {
        if(member.id == id){
            index = foundIndex;
            return true;
        }
    });

    if(!foundMember) {
        return res.send("Not found");
    }

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    };
    
    data.members[index] = member;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) {
            return res.send("Write error!");
        }
        return res.redirect(`/members/${id}`);
    });
}

//delete
exports.delete = function (req, res) {
    const {id} = req.body;

    const filteredMembers = data.members.filter(function (member) {
       return member.id != id; 
    });

    data.members = filteredMembers;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err){ 
            return res.send("Write file error");
        }
        return res.redirect("/members");
    });
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
}