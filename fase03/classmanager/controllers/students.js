<<<<<<< HEAD
//chamando o fs
const fs = require('fs');
const data = require("../data.json");
const {age, graduation, date, grade} = require("../utils");
const Intl = require('intl');

//index
exports.index = function (req, res) {  
    let students = [];

    for ( const student of data.students) {
        let year = grade(student.schoolYear);

        students.push({
            ...student,
            schoolYear: year,
        });
    }

    return res.render("students/index", { students });
}

//signup
exports.signup = function(req, res){
    return res.render("students/signup");
}

// post
exports.post = function (req, res) {
    const keys = Object.keys(req.body);

    for (const key of keys) {
        if(req.body[key] == "") {
            return res.send("Please, fill all the gaps");
        }
    }


    const birth = Date.parse(req.body.birth);
    console.log(req.body.brith)

    let id = 1;
    const lastStudent = data.students[data.students.length - 1]

    if(lastStudent){
        id = lastStudent.id + 1;
    }

    data.students.push({
        id,
        ...req.body,
    });
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2) ,function(err){
        if(err){
            return res.send("Erro");
        }
        return res.redirect("/students");
    });
}

//show
exports.show = function (req, res) {
    const {id} = req.params;

    const foundStudent = data.students.find(function(student) {
        return student.id == id;
    });

    if(!foundStudent){
        return res.send("Sorry! Not found");
    }

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        schoolYear: grade(foundStudent.schoolYear),
    };

    return res.render("students/show", { student })
}

//edit
exports.edit = function (req, res) {
    const {id} = req.params;

    const foundStudent = data.students.find(function(student) {
        return student.id == id;
    });

    if(!foundStudent){
        return res.send("Sorry! Not found");
    }

    const student = {
        ...foundStudent,
        schoolingText: graduation(foundStudent.schooling),
        birth: date(foundStudent.birth).iso,
    };

    return res.render("students/edit", { student });
}

//update
exports.put = function (req, res) {
    const {id} = req.body;
    console.log(id)
    let index = 0;

    const foundStudent = data.students.find(function (student, foundIndex) {
       if(student.id == id){
        index = foundIndex;
        return true;
       } 
    });

    if(!foundStudent){
        return res.send("Not found");
    }

    const student = {
        ...foundStudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    }

    data.students[index] = student;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Error");
        }
        return res.redirect(`/students/${id}`);
    });
}

//delete
exports.delete = function (req, res) {
    const {id} = req.body;

    const filteredStudents = data.students.filter(function (student) {
        return student.id != id;
    });

    data.students = filteredStudents;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err){
            return res.send("Delete problem");
        }
        return res.redirect("/students");
    });
=======
//chamando o fs
const fs = require('fs');
const data = require("../data.json");
const {age, graduation, date, grade} = require("../utils");
const Intl = require('intl');

//index
exports.index = function (req, res) {  
    let students = [];

    for ( const student of data.students) {
        let year = grade(student.schoolYear);

        students.push({
            ...student,
            schoolYear: year,
        });
    }

    return res.render("students/index", { students });
}

//signup
exports.signup = function(req, res){
    return res.render("students/signup");
}

// post
exports.post = function (req, res) {
    const keys = Object.keys(req.body);

    for (const key of keys) {
        if(req.body[key] == "") {
            return res.send("Please, fill all the gaps");
        }
    }


    const birth = Date.parse(req.body.birth);
    console.log(req.body.brith)

    let id = 1;
    const lastStudent = data.students[data.students.length - 1]

    if(lastStudent){
        id = lastStudent.id + 1;
    }

    data.students.push({
        id,
        ...req.body,
    });
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2) ,function(err){
        if(err){
            return res.send("Erro");
        }
        return res.redirect("/students");
    });
}

//show
exports.show = function (req, res) {
    const {id} = req.params;

    const foundStudent = data.students.find(function(student) {
        return student.id == id;
    });

    if(!foundStudent){
        return res.send("Sorry! Not found");
    }

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        schoolYear: grade(foundStudent.schoolYear),
    };

    return res.render("students/show", { student })
}

//edit
exports.edit = function (req, res) {
    const {id} = req.params;

    const foundStudent = data.students.find(function(student) {
        return student.id == id;
    });

    if(!foundStudent){
        return res.send("Sorry! Not found");
    }

    const student = {
        ...foundStudent,
        schoolingText: graduation(foundStudent.schooling),
        birth: date(foundStudent.birth).iso,
    };

    return res.render("students/edit", { student });
}

//update
exports.put = function (req, res) {
    const {id} = req.body;
    console.log(id)
    let index = 0;

    const foundStudent = data.students.find(function (student, foundIndex) {
       if(student.id == id){
        index = foundIndex;
        return true;
       } 
    });

    if(!foundStudent){
        return res.send("Not found");
    }

    const student = {
        ...foundStudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    }

    data.students[index] = student;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Error");
        }
        return res.redirect(`/students/${id}`);
    });
}

//delete
exports.delete = function (req, res) {
    const {id} = req.body;

    const filteredStudents = data.students.filter(function (student) {
        return student.id != id;
    });

    data.students = filteredStudents;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err){
            return res.send("Delete problem");
        }
        return res.redirect("/students");
    });
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
}