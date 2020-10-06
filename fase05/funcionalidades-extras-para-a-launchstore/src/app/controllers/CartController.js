const Cart = require('../../lib/cart');

const LoadProductService = require('../services/LoadProductService');

module.exports = {
    async index(req, res) {
        try {

            // const product = await LoadProductService.load('product', { where: { id: 1 } });

            let { cart } = req.session;
            
            // gerenciador de carrinho            
            cart = Cart.init(cart);

            return res.render('cart/index', { cart });
        } catch (error) {
            console.error(error);
        }
    },
    async addOne(req, res) {
        // pegar o id do produto e o produto
        const { id } = req.params;

        const product = await LoadProductService.load('product', { where: { id } });

        // pegar po carrinho da sessão
        let { cart } = req.session;

        // adicionar o produtto ao carrinho (usando nosso gerenciador de carrinhi)
        cart = Cart.init(cart).addOne(product);

        // atualizar o carrinho da sessão
        req.session.cart = cart;

        // redirecionar o usuário para a tela do carrinho
        return res.redirect('/cart');
    },
    async removeOne(req, res) {
        // pegar o id do produto
        let { id } = req.params;

        // pegar o carrinho da sessão
        let { cart } = req.session;

        // se não tiver carrinho, retornar
        if (!cart) return res.redirect('/cart');

        // iniciar o carrinho (gerenciador de carrinhi)
        cart = Cart.init(cart).removeOne(id);

        // atualizar o carirnhoo da sessão, removendo 1 item
        req.session.cart = cart;

        // redirecionamento para a pagina cart
        return res.redirect('/cart');
    },
    delete(req, res) {
        let { id } = req.params;
        let { cart } = req.session;

        if(!cart) return 

        req.session.cart = Cart.init(cart).delete(id);

        return res.redirect('/cart');
    }
}