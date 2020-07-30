<<<<<<< HEAD
const express = require('express');
const nunjucks = require('nunjucks');
const data = require("./data");

const server = express();

//o server vai ter acesso ao conteúdo estático do public
server.use(express.static('public'));

//o modelo de visualização do motor é em html
server.set("view engine", "njk");

//pasta views vai ser acessada pelo server com a pasta express
nunjucks.configure("views", {
    express: server
});

server.get("/", function (req,res) {
    const about = {
        avatar_url: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg",
        name: "Rocketseat",
        title: "Focada em transformar devs!",
        subTitle: "Tecnologias que ensinamos:",
        tecnologias: [
            {
                especialidade: "HTML",
            },
            {
                especialidade: "CSS",
            },
            {
                especialidade: "JS",
            },
            {
                especialidade: "REACT",
            },
            {
                especialidade: "REACT NATIVE",
            },
            {
                especialidade: "NODE",
            }
        ],
        links: [
            {
                id: "Github",
                url: "https://github.com/Rocketseat",
            },
            {
                id: "Facebook",
                url: "https://www.facebook.com/rocketseat/",
            },
            {
                id: "Linkedin",
                url: "https://www.linkedin.com/school/rocketseat/",
            }
        ]

    };
    return res.render("index", { about }); 
});

server.get("/content/:id", function (req, res) {
    const id = req.params.id;
    const curso = data.find(function(curso){
        return curso.id == id
    }); 
    if(!data) {
            return res.render("404");
    };
    return res.render("displaycontent", { item: curso });	
})

server.get("/content", function (req,res) {
    return res.render("content", { items: data }); 
 });


// server.get("/about", function (req, res) {
//     return res.render("about");
// });

server.use(function (req, res) {
    res.status(404).render("404");
});

server.listen(50, function () {
    console.log("server is running");
=======
const express = require('express');
const nunjucks = require('nunjucks');
const data = require("./data");

const server = express();

//o server vai ter acesso ao conteúdo estático do public
server.use(express.static('public'));

//o modelo de visualização do motor é em html
server.set("view engine", "njk");

//pasta views vai ser acessada pelo server com a pasta express
nunjucks.configure("views", {
    express: server
});

server.get("/", function (req,res) {
    const about = {
        avatar_url: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg",
        name: "Rocketseat",
        title: "Focada em transformar devs!",
        subTitle: "Tecnologias que ensinamos:",
        tecnologias: [
            {
                especialidade: "HTML",
            },
            {
                especialidade: "CSS",
            },
            {
                especialidade: "JS",
            },
            {
                especialidade: "REACT",
            },
            {
                especialidade: "REACT NATIVE",
            },
            {
                especialidade: "NODE",
            }
        ],
        links: [
            {
                id: "Github",
                url: "https://github.com/Rocketseat",
            },
            {
                id: "Facebook",
                url: "https://www.facebook.com/rocketseat/",
            },
            {
                id: "Linkedin",
                url: "https://www.linkedin.com/school/rocketseat/",
            }
        ]

    };
    return res.render("index", { about }); 
});

server.get("/content/:id", function (req, res) {
    const id = req.params.id;
    const curso = data.find(function(curso){
        return curso.id == id
    }); 
    if(!data) {
            return res.render("404");
    };
    return res.render("displaycontent", { item: curso });	
})

server.get("/content", function (req,res) {
    return res.render("content", { items: data }); 
 });


// server.get("/about", function (req, res) {
//     return res.render("about");
// });

server.use(function (req, res) {
    res.status(404).render("404");
});

server.listen(50, function () {
    console.log("server is running");
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
});