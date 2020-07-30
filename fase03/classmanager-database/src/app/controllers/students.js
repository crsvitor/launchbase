<<<<<<< HEAD
const {age, graduation, date, grade} = require("../../lib/utils");
const Student = require("../models/Student");

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query;

        page = page ||  1;
        limit = limit || 2;

        const offset = limit * ( page - 1 );
        
        const params = {
            filter,
            page, 
            limit,
            offset,
            callback(students) {

                const pagination = {
                    total: Math.ceil( students[0].total / limit ),
                    page
                };

                for (let student of students) {
                    student.school_year = grade(student.school_year);
                }
                

                return res.render("students/index", { filter, students, pagination });
            }
        };

        Student.paginate(params);
    },
    signup(req, res){
        Student.teacherSelectOptions(function (teachers) {
            return res.render("students/signup", {teacherOptions: teachers});
        });
    },
    post(req, res){
        const keys = Object.keys(req.body);

        for (const key of keys) {
            if(req.body[key] == "") {
                return res.send("Please, fill all the gaps");
            }
        }

        Student.create(req.body, function (student) {
           return res.redirect(`students/${student.id}`); 
        });
    },
    show(req, res){
        Student.find(req.params.id, function(student) {
            if (!student) {
                return res.send("Student not found!");
            }
                        
            student.birth = date(student.birth_date).birthDay;
            student.schoolYear = grade(student.school_year);
            student.studyHours = student.weekly_hours;

            return res.render("students/show", { student });
        });
    },
    edit(req, res){
        Student.find(req.params.id, function (student) {
            if (!student) {
                return res.send("Student not found!");
            }

            student.birth = date(student.birth_date).iso;
            student.schoolYear = student.school_year;
            student.studyHours = student.weekly_hours;

            Student.teacherSelectOptions(function (teachers) {
                return res.render("students/edit", {student, teacherOptions: teachers});
            });
        });
    },
    put(req, res) {
        const keys = Object.keys(req.body);

        for (const key of keys) {
            if(req.body[key] == "") return res.send("Please, fill all the gaps");
        }

        Student.update(req.body, function () {
            return res.redirect(`/students/${req.body.id}`);
        });
    },
    delete(req, res) {
        Student.delete(req.body.id, function () {
            return res.redirect(`/students`);
        });
    }
=======
const {age, graduation, date, grade} = require("../../lib/utils");
const Student = require("../models/Student");

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query;

        page = page ||  1;
        limit = limit || 2;

        const offset = limit * ( page - 1 );
        
        const params = {
            filter,
            page, 
            limit,
            offset,
            callback(students) {

                const pagination = {
                    total: Math.ceil( students[0].total / limit ),
                    page
                };

                for (let student of students) {
                    student.school_year = grade(student.school_year);
                }
                

                return res.render("students/index", { filter, students, pagination });
            }
        };

        Student.paginate(params);
    },
    signup(req, res){
        Student.teacherSelectOptions(function (teachers) {
            return res.render("students/signup", {teacherOptions: teachers});
        });
    },
    post(req, res){
        const keys = Object.keys(req.body);

        for (const key of keys) {
            if(req.body[key] == "") {
                return res.send("Please, fill all the gaps");
            }
        }

        Student.create(req.body, function (student) {
           return res.redirect(`students/${student.id}`); 
        });
    },
    show(req, res){
        Student.find(req.params.id, function(student) {
            if (!student) {
                return res.send("Student not found!");
            }
                        
            student.birth = date(student.birth_date).birthDay;
            student.schoolYear = grade(student.school_year);
            student.studyHours = student.weekly_hours;

            return res.render("students/show", { student });
        });
    },
    edit(req, res){
        Student.find(req.params.id, function (student) {
            if (!student) {
                return res.send("Student not found!");
            }

            student.birth = date(student.birth_date).iso;
            student.schoolYear = student.school_year;
            student.studyHours = student.weekly_hours;

            Student.teacherSelectOptions(function (teachers) {
                return res.render("students/edit", {student, teacherOptions: teachers});
            });
        });
    },
    put(req, res) {
        const keys = Object.keys(req.body);

        for (const key of keys) {
            if(req.body[key] == "") return res.send("Please, fill all the gaps");
        }

        Student.update(req.body, function () {
            return res.redirect(`/students/${req.body.id}`);
        });
    },
    delete(req, res) {
        Student.delete(req.body.id, function () {
            return res.redirect(`/students`);
        });
    }
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
}