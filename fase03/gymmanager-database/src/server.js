const express = require('express');
const nunjucks = require('nunjucks');
const routes = require("./routes");
const methodOverride = require('method-override');
const server = express();


//colocar o estilo express usar arquivos estáticos na pasta public
server.use(express.static('public'));

//configurando o req body
server.use(express.urlencoded({ extended: true }));

server.use(methodOverride('_method'));

server.use(routes);


//configurar o template engine
server.set("view engine", "njk");

//"views" é a pasta on o nunjucks pode atuar, { qual a variável para ser usada no express}
nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true,
});



//listen to put on the server, it starts listening or sending info to that localhost number
server.listen(5000, function() {
    console.log("server is running");
});

