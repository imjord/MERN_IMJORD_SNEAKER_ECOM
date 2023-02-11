const { getProducts } = require('../controllers/ProductsController');

const router = require('express').Router();



router.get("/products", getProducts);



module.exports = router;