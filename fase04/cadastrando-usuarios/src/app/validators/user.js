const User = require('../models/User');

async function post(req, res, next) {
    //check if it has all fullfilled fields
    const keys = Object.keys(req.body);
        
    for (key of keys) {
        if(req.body[key] == "") {
            return res.render('user/register', {
                user: req.body, 
                error: 'Preencha todos os campos'
            });
        }
    }

    //check if user exists [emai, cpf_cnpj]
    let { email, cpf_cnpj, password, passwordRepeat } = req.body;

    cpf_cnpj = cpf_cnpj.replace(/\D/g, "");

    const user = await User.findOne({ 
        where: { email },
        or: { cpf_cnpj } 
    });

    if(user) {
        return res.render('user/register', {
            user: req.body, 
            error: 'Usuário já cadastrado'
        });
    }
    //check if password match
    if(password != passwordRepeat) {
        return res.render('user/register', {
            user: req.body, 
            error: 'Preencha as senhas de forma iguais'
        });
    }

    next();
}

module.exports = {
    post
}