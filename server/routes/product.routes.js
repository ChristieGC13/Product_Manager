const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/products', ProductController.list);
    app.post('/api/products', ProductController.create);
    app.get('/api/products/:id', ProductController.detail);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.delete)
}

