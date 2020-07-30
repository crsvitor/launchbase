<<<<<<< HEAD
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require("./routes");
const methodOverride = require('method-override');

const server = express();

//linha responsável por fazer funcionar o req body
server.use(express.urlencoded({ extended: true }));

server.use(express.static('public'));

server.use(methodOverride('_method'));

server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
});

server.listen(50, function () {
    console.log("Server is running")
=======
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require("./routes");
const methodOverride = require('method-override');

const server = express();

//linha responsável por fazer funcionar o req body
server.use(express.urlencoded({ extended: true }));

server.use(express.static('public'));

server.use(methodOverride('_method'));

server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
});

server.listen(50, function () {
    console.log("Server is running")
>>>>>>> 4742a226abbdfe3227a596acddf3dbb5e27bdd58
});