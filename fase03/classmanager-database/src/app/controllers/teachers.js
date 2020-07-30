<<<<<<< HEAD
const {age, graduation, date, grade} = require("../../lib/utils");
const Teacher = require("../models/Teacher");

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query;

        page = page || 1;
        limit = limit || 2;

        let offset = limit * ( page - 1 );

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(teachers) {

                // if (teachers[0]) {
                //     total = (teachers[0].total / limit) + 1
                // }
                
                const pagination = {
                    total: Math.ceil(teachers[0].total / limit),
                    page
                };

                return res.render("teachers/index", {teachers, pagination, filter});
            }
        };

        Teacher.paginate(params);
    },
    signup(req, res){
        return res.render("teachers/signup");
    },
    post(req, res){
        const keys = Object.keys(req.body);

        for (const key of keys) {
            if(req.body[key] == "") {
                return res.send("Please, fill all the gaps");
            }
        }

        Teacher.create(req.body, function (teacher) {
           return res.redirect(`teachers/${teacher.id}`); 
        });
    },
    show(req, res){
        Teacher.find(req.params.id, function(teacher) {
            if (!teacher) {
                return res.send("Teacher not found!");
            }
                        
            teacher.age = age(teacher.birth_date);
            teacher.schooling = graduation(teacher.education_level);
            teacher.classWay = teacher.class_type;
            teacher.services = teacher.subjects_taught;
            teacher.created_at = date(teacher.created_at).format;

            return res.render("teachers/show", { teacher });
        });
    },
    edit(req, res){
        Teacher.find(req.params.id, function (teacher) {
            if (!teacher) {
                return res.send("Teacher not found!");
            }

            teacher.schooling = teacher.education_level;
            teacher.birth = date(teacher.birth_date).iso;
            teacher.services = teacher.subjects_taught;
            
            return res.render("teachers/edit", {teacher});
        });
    },
    put(req, res) {
        const keys = Object.keys(req.body);

        for (const key of keys) {
            if(req.body[key] == "") return res.send("Please, fill all the gaps");
        }

        Teacher.update(req.body, function () {
            return res.redirect(`/teachers/${req.body.id}`);
        });
    },
    delete(req, res) {
        Teacher.delete(req.body.id, function () {
            return res.redirect(`/teachers`);
        });
    }
=======
const {age, graduation, date, grade} = require("../../lib/utils");
const Teacher = require("../models/Teacher");

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query;

        page = page || 1;
        limit = limit || 2;

        let offset = limit * ( page - 1 );

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(teachers) {

                // if (teachers[0]) {
                //     total = (teachers[0].total / limit) + 1
                // }
                
                const pagination = {
                    total: Math.ceil(teachers[0].total / limit),
                    page
                };

                return res.render("teachers/index", {teachers, pagination, filter});
            }
        };

        Teacher.paginate(params);
    },
    signup(req, res){
        return res.render("teachers/signup");
    },
    post(req, res){
        const keys = Object.keys(req.body);

        for (const key of keys) {
            if(req.body[key] == "") {
                return res.send("Please, fill all the gaps");
            }
        }

        Teacher.create(req.body, function (teacher) {
           return res.redirect(`teachers/${teacher.id}`); 
        });
    },
    show(req, res){
        Teacher.find(req.params.id, function(teacher) {
            if (!teacher) {
                return res.send("Teacher not found!");
            }
                        
            teacher.age = age(teacher.birth_date);
            teacher.schooling = graduation(teacher.education_level);
            teacher.classWay = teacher.class_type;
            teacher.services = teacher.subjects_taught;
            teacher.created_at = date(teacher.created_at).format;

            return res.render("teachers/show", { teacher });
        });
    },
    edit(req, res){
        Teacher.find(req.params.id, function (teacher) {
            if (!teacher) {
                return res.send("Teacher not found!");
            }

            teacher.schooling = teacher.education_level;
            teacher.birth = date(teacher.birth_date).iso;
            teacher.services = teacher.subjects_taught;
            
            return res.render("teachers/edit", {teacher});
        });
    },
    put(req, res) {
        const keys = Object.keys(req.body);

        for (const key of keys) {
            if(req.body[key] == "") return res.send("Please, fill all the gaps");
        }

        Teacher.update(req.body, function () {
            return res.redirect(`/teachers/${req.body.id}`);
        });
    },
    delete(req, res) {
        Teacher.delete(req.body.id, function () {
            return res.redirect(`/teachers`);
        });
    }
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
}