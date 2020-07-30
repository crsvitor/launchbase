<<<<<<< HEAD
//chamando o fs
const fs = require('fs');
const data = require("../data.json");
const {age, graduation, date} = require("../utils");
const Intl = require('intl');

//index
exports.index = function (req, res) {  
    return res.render("teachers/index", { teachers: data.teachers });
}

//signup
exports.signup = function(req, res){
    return res.render("teachers/signup");
}

// post
exports.post = function (req, res) {
    const keys = Object.keys(req.body);

    for (const key of keys) {
        if(req.body[key] == "") {
            return res.send("Please, fill all the gaps");
        }
    }

    let {avatar_url, name, birth, schooling, classWay, services} = req.body;

    birth = Date.parse(birth);
    const createdAt = Date.now();
    const id = Number(data.teachers.length + 1);
    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        schooling,
        classWay,
        services,
        createdAt
    });
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2) ,function(err){
        if(err){
            return res.send("Erro");
        }
        return res.redirect("/teachers");
    });
}

//show
exports.show = function (req, res) {
    const {id} = req.params;

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id;
    });

    if(!foundTeacher){
        return res.send("Sorry! Not found");
    }

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        schooling: graduation(foundTeacher.schooling),
        services: foundTeacher.services.split(","),
        createdAt: new Intl.DateTimeFormat("pt-br").format(foundTeacher.createdAt),
    };

    return res.render("teachers/show", { teacher })
}

//edit
exports.edit = function (req, res) {
    const {id} = req.params;

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id;
    });

    if(!foundTeacher){
        return res.send("Sorry! Not found");
    }

    const teacher = {
        ...foundTeacher,
        schoolingText: graduation(foundTeacher.schooling),
        birth: date(foundTeacher.birth).iso,
    };

    return res.render("teachers/edit", { teacher });
}

//update
exports.put = function (req, res) {
    const {id} = req.body;
    console.log(id)
    let index = 0;

    const foundTeacher = data.teachers.find(function (teacher, foundIndex) {
       if(teacher.id == id){
        index = foundIndex;
        return true;
       } 
    });

    if(!foundTeacher){
        return res.send("Not found");
    }

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    }

    data.teachers[index] = teacher;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Error");
        }
        return res.redirect(`/teachers/${id}`);
    });
}

//delete
exports.delete = function (req, res) {
    const {id} = req.body;

    const filteredTeachers = data.teachers.filter(function (teacher) {
        return teacher.id != id;
    });

    data.teachers = filteredTeachers;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err){
            return res.send("Delete problem");
        }
        return res.redirect("/teachers");
    });
=======
//chamando o fs
const fs = require('fs');
const data = require("../data.json");
const {age, graduation, date} = require("../utils");
const Intl = require('intl');

//index
exports.index = function (req, res) {  
    return res.render("teachers/index", { teachers: data.teachers });
}

//signup
exports.signup = function(req, res){
    return res.render("teachers/signup");
}

// post
exports.post = function (req, res) {
    const keys = Object.keys(req.body);

    for (const key of keys) {
        if(req.body[key] == "") {
            return res.send("Please, fill all the gaps");
        }
    }

    let {avatar_url, name, birth, schooling, classWay, services} = req.body;

    birth = Date.parse(birth);
    const createdAt = Date.now();
    const id = Number(data.teachers.length + 1);
    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        schooling,
        classWay,
        services,
        createdAt
    });
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2) ,function(err){
        if(err){
            return res.send("Erro");
        }
        return res.redirect("/teachers");
    });
}

//show
exports.show = function (req, res) {
    const {id} = req.params;

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id;
    });

    if(!foundTeacher){
        return res.send("Sorry! Not found");
    }

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        schooling: graduation(foundTeacher.schooling),
        services: foundTeacher.services.split(","),
        createdAt: new Intl.DateTimeFormat("pt-br").format(foundTeacher.createdAt),
    };

    return res.render("teachers/show", { teacher })
}

//edit
exports.edit = function (req, res) {
    const {id} = req.params;

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id;
    });

    if(!foundTeacher){
        return res.send("Sorry! Not found");
    }

    const teacher = {
        ...foundTeacher,
        schoolingText: graduation(foundTeacher.schooling),
        birth: date(foundTeacher.birth).iso,
    };

    return res.render("teachers/edit", { teacher });
}

//update
exports.put = function (req, res) {
    const {id} = req.body;
    console.log(id)
    let index = 0;

    const foundTeacher = data.teachers.find(function (teacher, foundIndex) {
       if(teacher.id == id){
        index = foundIndex;
        return true;
       } 
    });

    if(!foundTeacher){
        return res.send("Not found");
    }

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    }

    data.teachers[index] = teacher;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Error");
        }
        return res.redirect(`/teachers/${id}`);
    });
}

//delete
exports.delete = function (req, res) {
    const {id} = req.body;

    const filteredTeachers = data.teachers.filter(function (teacher) {
        return teacher.id != id;
    });

    data.teachers = filteredTeachers;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err){
            return res.send("Delete problem");
        }
        return res.redirect("/teachers");
    });
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
}