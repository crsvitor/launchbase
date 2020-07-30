const express = require('express');
const routes = express.Router();
const instructors = require('./app/controllers/instructors');
const members = require('./app/controllers/members');

routes.get("/", function (req, res) {
   return res.redirect("/instructors"); 
});
routes.get("/instructors", instructors.index );
//rota da página do form
routes.get("/instructors/create", instructors.create);
//rota para entregar os dados do data
// /:id significa que o valor depois da barra é o meu parâmetro
routes.get('/instructors/:id', instructors.show);
routes.get('/instructors/:id/edit', instructors.edit);
//configurando o recebimento do form
//rota do recebimento de arquivos
routes.post("/instructors", instructors.post);
routes.put("/instructors", instructors.put);
routes.delete("/instructors", instructors.delete);


routes.get("/members", members.index );
//rota da página do form
routes.get("/members/create", members.create);
//rota para entregar os dados do data
// /:id significa que o valor depois da barra é o meu parâmetro
routes.get('/members/:id', members.show);
routes.get('/members/:id/edit', members.edit);
//configurando o recebimento do form
//rota do recebimento de arquivos
routes.post("/members", members.post);
routes.put("/members", members.put);
routes.delete("/members", members.delete);


module.exports = routes;