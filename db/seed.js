const mongoose = require('./connection')
const Recipes = require('../models/Recipes');
const seedData = require('./seeds.json');

Recipes.deleteMany({}).then(() => {
    Recipes.collection.insert(seedData)
    .then(recipes => {
        console.log(recipes)
    })
    .catch(err => {
        console.log(err)
        process.exit()
    })
});