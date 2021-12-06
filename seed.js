const mongoose = require('mongoose');

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION EROOR!!")
        console.log(err)
    })


// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 40,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// }).catch(err => {
//     console.log(err)
// })


const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 20,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 50,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Melon ',
        price: 40,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 25,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 30,
        category: 'dairy'
    }
]



Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })