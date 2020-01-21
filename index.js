const express = require('express');

const app = express();

const recipes = require("./controllers/recipes");
app.use("/recipes", recipes);

app.listen(4000, () => console.log("Running on port 4000!"));