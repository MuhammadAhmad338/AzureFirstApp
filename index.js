const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World!!!');
});

app.get('/products', (req, res) => {
    res.status(200).send('All Products!!!');
});

app.get('/allProducts', (req, res) => {
    res.status(200).send("Hello World I got all Products!!!");
});

app.listen(port, () => {
    console.log(`Server is Listening at the port ${port}`);
});