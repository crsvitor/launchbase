const express = require('express');
const routes = express.Router();

const HomeController = require('../app/controllers/HomeController');

// chamando as rotas das outras páginas
const products = require('./products');
const users = require('./users');
const cart = require('./cart');

// utilizando as outras rotas
routes.get("/", HomeController.index);
routes.use('/products', products);
routes.use('/users', users);
routes.use('/cart', cart);

// Alias - atalhos
routes.get('/ads/create', function(req, res) {
    return res.redirect("/products/create");
});

routes.get('/accounts', function(req, res) {
    return res.redirect("/users/login");
});

module.exports = routes;