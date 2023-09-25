const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Endpoint/endpoint");
const productRouter = require("./Endpoint/productEndpoints");
const bodyParser = require("body-parser");

// Start the server
const PORT = parseInt(process.env.PORT) || 6000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/", router);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is Listening at the the port ${PORT}`);
});
