const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
   res.status(200).send("All Products!!!");
});

app.listen(PORT, () => {
    console.log(`Server is Listening at the port ${PORT}`);
});