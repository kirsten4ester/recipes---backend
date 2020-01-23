const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());
const recipes = require("./controllers/recipes");
app.use("/recipes", recipes);

app.listen(5000, () => console.log("Running on port 5000!"));