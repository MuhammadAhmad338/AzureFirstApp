const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Endpoint/endpoint");
const productRouter = require("./Endpoint/productEndpoints");
const PORT = process.env.PORT || 3000;
// Configure CORS to allow requests from your frontend origin


app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use("/", router);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is Listening at the port ${PORT}`);
});
