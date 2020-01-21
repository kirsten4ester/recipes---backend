const express = require("express");
const router = express.Router();
const Recipes = require('../models/Recipes');

router.get('/', (req, res) => {
    Recipes.find({}).then(recipes => res.json(recipes))
});

module.exports = router