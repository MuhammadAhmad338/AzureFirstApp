const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes/userRoutes");
const productRouter = require("./Routes/productRoutes");
const commentRouter = require("./Routes/commentRoutes");
const reviewRouter = require("./Routes/reviewRoutes");
const bodyParser = require("body-parser");

const PORT = parseInt(process.env.PORT) || 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/api/users", router);
app.use("/api/products", productRouter);
app.use("/api/comments", commentRouter);
app.use("/api/reviews", reviewRouter);
app.use("/", (req, res) => {
  res.send("<h1>No such route</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is Listening at the the port ${PORT}`);
});