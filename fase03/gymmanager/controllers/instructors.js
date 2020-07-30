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
    return res.render("instructors/index", { instructors: data.instructors }); 
}

//show
exports.show = function(req, res) {
    //req.query.id -> /?id= 
    //req.body -> pega o corpo do formulário através do method POST
    //req.params.id -> /:id  direto na barra /

    //desistruturação:
    const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id;
    });

    if(!foundInstructor) {
        return res.send("Not found");
    }

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),
    };

    return res.render("instructors/show", { instructor });
}

//create
exports.create = function (req, res) {
    return res.render("instructors/create"); 
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

    //desistruturando
    let {
        avatar_url,
        name,
        birth,
        gender,
        services,
    } = req.body

    //mudando a atribuição à data de aniversário
    birth = Date.parse(birth);

    //adicionando datas do momento do cadastro
    const created_at = Date.now();

    //adicionando um id
    const id = Number(data.instructors.length + 1);

    //jogar informações no array que está dentro do objeto
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    });
    
    //primeiro parâmetro é o local de salvamento do arquivo, no caso, data.json
    //segundo a forma como vai ser salva, também é possível escrever com um objeto, por exemplo o JSON.stringify()
    //por fim, uma callback function
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Error, please write again");
        return res.redirect("/instructors");
    })

    //responsável por requisitar os arquivos no body
    //req.body pois é uma rota post e o corpo da requisição post
    //return res.send(req.body); 
}

//edit
exports.edit = function (req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id;
    });

    if(!foundInstructor) {
        return res.send("Not found");
    }

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth).iso,
    }

    return res.render('instructors/edit', { instructor } );
}

//put
exports.put = function (req, res) {
    const { id } = req.body
    let index = 0;

    const foundInstructor = data.instructors.find(function (instructor, foundIndex) {
        if(instructor.id == id){
            index = foundIndex;
            return true;
        }
    });

    if(!foundInstructor) {
        return res.send("Not found");
    }

    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    };
    
    data.instructors[index] = instructor;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) {
            return res.send("Write error!");
        }
        return res.redirect(`/instructors/${id}`);
    });
}

//delete
exports.delete = function (req, res) {
    const {id} = req.body;

    const filteredInstructors = data.instructors.filter(function (instructor) {
       return instructor.id != id; 
    });

    data.instructors = filteredInstructors;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err){ 
            return res.send("Write file error");
        }
        return res.redirect("/instructors");
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
    return res.render("instructors/index", { instructors: data.instructors }); 
}

//show
exports.show = function(req, res) {
    //req.query.id -> /?id= 
    //req.body -> pega o corpo do formulário através do method POST
    //req.params.id -> /:id  direto na barra /

    //desistruturação:
    const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id;
    });

    if(!foundInstructor) {
        return res.send("Not found");
    }

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),
    };

    return res.render("instructors/show", { instructor });
}

//create
exports.create = function (req, res) {
    return res.render("instructors/create"); 
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

    //desistruturando
    let {
        avatar_url,
        name,
        birth,
        gender,
        services,
    } = req.body

    //mudando a atribuição à data de aniversário
    birth = Date.parse(birth);

    //adicionando datas do momento do cadastro
    const created_at = Date.now();

    //adicionando um id
    const id = Number(data.instructors.length + 1);

    //jogar informações no array que está dentro do objeto
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    });
    
    //primeiro parâmetro é o local de salvamento do arquivo, no caso, data.json
    //segundo a forma como vai ser salva, também é possível escrever com um objeto, por exemplo o JSON.stringify()
    //por fim, uma callback function
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) return res.send("Error, please write again");
        return res.redirect("/instructors");
    })

    //responsável por requisitar os arquivos no body
    //req.body pois é uma rota post e o corpo da requisição post
    //return res.send(req.body); 
}

//edit
exports.edit = function (req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id;
    });

    if(!foundInstructor) {
        return res.send("Not found");
    }

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth).iso,
    }

    return res.render('instructors/edit', { instructor } );
}

//put
exports.put = function (req, res) {
    const { id } = req.body
    let index = 0;

    const foundInstructor = data.instructors.find(function (instructor, foundIndex) {
        if(instructor.id == id){
            index = foundIndex;
            return true;
        }
    });

    if(!foundInstructor) {
        return res.send("Not found");
    }

    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    };
    
    data.instructors[index] = instructor;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err) {
            return res.send("Write error!");
        }
        return res.redirect(`/instructors/${id}`);
    });
}

//delete
exports.delete = function (req, res) {
    const {id} = req.body;

    const filteredInstructors = data.instructors.filter(function (instructor) {
       return instructor.id != id; 
    });

    data.instructors = filteredInstructors;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err){ 
            return res.send("Write file error");
        }
        return res.redirect("/instructors");
    });
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
}