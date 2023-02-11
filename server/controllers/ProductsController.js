const Product = require('../models/Products');



const ProductController = {
    getProducts(req,res) {
        Product.find({}).then(products => {
            res.json({"products": products});
        }).catch(err => {
            console.log(err);
        })
    }
}



module.exports = ProductController;