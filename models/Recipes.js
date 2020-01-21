const mongoose = require("../db/connection");

const RecipesSchema = new mongoose.Schema({
    name: String,
    ingredients: String,
    instructions: String
  });

const Recipes = mongoose.model("Recipes", RecipesSchema);

module.exports = Recipes