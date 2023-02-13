const mongoose = require('mongoose');
const Product = require('../models/Products');



mongoose.connect('mongodb://127.0.0.1:27017/vadeSneakers').then(() => {
    console.log('product data seeded');
}).catch(err => {
    console.log(err);
});


const productData = [
    {
        name: 'Nike Air Force 1',
        price: 120.00,
        image: '1.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Force 1',
        price: 120.00,
        image: '1.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 120.00,
        image: '2.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 220.00,
        image: '3.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 320.00,
        image: '4.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 420.00,
        image: '5.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 520.00,
        image: '6.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 220.00,
        image: '7.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 220.00,
        image: '7.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 220.00,
        image: '8.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 220.00,
        image: '9.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 220.00,
        image: '10.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 220.00,
        image: '11.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 220.00,
        image: '12.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Nike Air Max 270',
        price: 300.00,
        image: '13.jpg',
        releaseDate: '2021-01-01'
    },
    {
        name: 'Mystery Box',
        price: 1220.00,
        image: '14.jpg',
        releaseDate: '2021-01-01'
    },
];


const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(productData)
}

seedDB().then(() => {
    mongoose.connection.close()
});