const { pool } = require("./controller");

const getProductCommnets = async (req, res) => {
  const { productId } = req.query;
  console.log(productId);
  try {
    const query =
      "SELECT commentid, content, created_at FROM comments WHERE product_id = ? ORDER BY created_at DESC;    ";
    pool.query(query, [productId], (results, error) => {
      if (!results) {
        res.json(error);
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const postProductComments = async (req, res) => {
  const productId = req.body.product_id;
  const content = req.body.content;
  try {
    const query = "INSERT INTO comments (product_id, content) VALUES(?, ?)";
    pool.query(query, [productId, content], (results, error) => {
      if (!results) {
        res.json(error);
      } else {
        res.status(200).json("Product Added Successfully!");
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getProductCommnets,
  postProductComments,
};
