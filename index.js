const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./controllers/routes");
const uri = require("./config/mongoURI");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected!!"));

app.use(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
