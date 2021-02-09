const ProductController = require('../controllers/product.controller');


module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProduct);
}
