const { Product } = require('../models/product.model');


module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.list = (req, res) => {
    Product.find({})
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports.create = (req, res) => {
    const { name, price, description } = req.body;
    console.log(req.body);
    Product.create({
        name,
        price,
        description
    })
    .then(product => {
        res.json(product)
    })
    .catch(err => {
        res.status(400).json(err.errors);
    })
}

module.exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
    Product.findOneAndUpdate({_id: id}, {
        name,
        price,
        description
    }, {new:true, useFindAndModify: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err.errors))
}

module.exports.detail = (req, res) => {
    const { id } = req.params;
    Product.findOne({ _id: id })
        .then(product => {
            res.json(product)
        })
        .catch(err => {
            res.status(400).json(err)
        } )
}

module.exports.delete = (req, res) => {
    const { id } = req.params;
    Product.deleteOne({_id:id})
        .then(deleteConfirmation => {
            res.json(deleteConfirmation);
        })
        .catch(err => {
            res.status(400).json(err);
        })
}