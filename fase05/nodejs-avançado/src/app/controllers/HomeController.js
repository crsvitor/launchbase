const LoadProductService = require('../services/LoadProductService');

module.exports = {
    async index(req, res) {
        try {
            const AllProducts  = await LoadProductService.load('products');
            const products = AllProducts.filter((product, index) => index > 2 ? false : true);

            return res.render("home/index", { products });

        } catch (error) {
            console.error(error);
        }
    }
}