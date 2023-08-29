const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is Listening at the port ${PORT}`);
});