<<<<<<< HEAD
const express = require('express');
const nunjucks = require('nunjucks');
const videos = require("./data");

const server = express();


//colocar o estilo express usar arquivos estáticos na pasta public
server.use(express.static('public'))


//configurar o template engine
server.set("view engine", "njk");

//"views" é a pasta on o nunjucks pode atuar, { qual a variável para ser usada no express}
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
});


//get index page and send info. render - renderizar. Ou sej, na / renderiza o index
server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://image-aws-us-west-2.vsco.co/4c9502/48125634/5ee1662bd042c91f76e68062/720x960/vsco5ee16635dde15.jpg",
        name: "Vitor de Castro",
        description: "Aluno da Federal do ABC && Rockeatseat, Launchbase.",
        subDescription: "Procurando investir meu interesse em algo construtivo ",
        links: [
            {
                name: "Github",
                url: "https://github.com/crsvitor/",
            },
            {
                name: "Twitter",
                url: "https://twitter.com/crsvitor/",
            },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/crsvitor/",
            },
        ]
    };

    return res.render("about", { about });
});


//rota para outra página. Ou sej, na /potfolio renderiza o portfolio
server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos });
})

//video page
server.get("/video", function (req, res) {
   const id = req.query.id; // tudo que estiver na barra de navegação aparece aqui
   console.log(id); //então se o id for igual a um video.id renderiza a página
   const video = videos.find(function(video){
        return video.id == id; //o id da página é igual o id do vídeo?
   });
   if (!video) {
       return res.send("Vídeo não encontrado");
   }
   return res.render("video", { item: video }); //se sim, render a pag video e o item que recebe a atribuição agora de video
});


//listen to put on the server, it starts listening or sending info to that localhost number
server.listen(5000, function() {
    console.log("server is running");
});

=======
const express = require('express');
const nunjucks = require('nunjucks');
const videos = require("./data");

const server = express();


//colocar o estilo express usar arquivos estáticos na pasta public
server.use(express.static('public'))


//configurar o template engine
server.set("view engine", "njk");

//"views" é a pasta on o nunjucks pode atuar, { qual a variável para ser usada no express}
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
});


//get index page and send info. render - renderizar. Ou sej, na / renderiza o index
server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://image-aws-us-west-2.vsco.co/4c9502/48125634/5ee1662bd042c91f76e68062/720x960/vsco5ee16635dde15.jpg",
        name: "Vitor de Castro",
        description: "Aluno da Federal do ABC && Rockeatseat, Launchbase.",
        subDescription: "Procurando investir meu interesse em algo construtivo ",
        links: [
            {
                name: "Github",
                url: "https://github.com/crsvitor/",
            },
            {
                name: "Twitter",
                url: "https://twitter.com/crsvitor/",
            },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/crsvitor/",
            },
        ]
    };

    return res.render("about", { about });
});


//rota para outra página. Ou sej, na /potfolio renderiza o portfolio
server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos });
})

//video page
server.get("/video", function (req, res) {
   const id = req.query.id; // tudo que estiver na barra de navegação aparece aqui
   console.log(id); //então se o id for igual a um video.id renderiza a página
   const video = videos.find(function(video){
        return video.id == id; //o id da página é igual o id do vídeo?
   });
   if (!video) {
       return res.send("Vídeo não encontrado");
   }
   return res.render("video", { item: video }); //se sim, render a pag video e o item que recebe a atribuição agora de video
});


//listen to put on the server, it starts listening or sending info to that localhost number
server.listen(5000, function() {
    console.log("server is running");
});

>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
