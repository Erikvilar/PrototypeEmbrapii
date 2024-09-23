const express = require("express");
const moongose = require("mongoose");
const app = express();
const cors = require('cors');
const credentials = require("./credentials.js");
const productRoute = require("./routes/product.routes.js");
const PORT = process.env.PORT || 5000;

app.use(express.static("client/build"));
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extends: false }));

app.use("/api/products", productRoute);
const database = `mongodb+srv://${credentials.user}:${credentials.password}@backend.xc0ao.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend`;
moongose
  .connect(database)
  .then(() => {
    console.log("Connected!");
    app.listen(5000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("connection Failed");
  });
