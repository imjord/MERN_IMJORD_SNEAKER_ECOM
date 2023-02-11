const  {Schema, model} = require('mongoose');



const ProductSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    releaseDate: {  
        type: Date,
        default: Date.now
    }
});


const Product = new model('Product', ProductSchema);


module.exports = Product;