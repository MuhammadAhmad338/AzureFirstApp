const { pool } = require("./controller");

const getProductReviews = async (req, res) => {
  const { productId } = req.query;
  try {
    const query =
      "SELECT * FROM reviews WHERE productid = ? ORDER BY created_at DESC;";
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

const addProductReviews = async (req, res) => {
    const productid = req.body.productid;
    const name = req.body.name;
    const email = req.body.email;
    const reviewtitle = req.body.reviewtitle;
    const rating = req.body.rating;
    const content = req.body.content;
    try {
        const query = "INSERT INTO reviews (productid,  email, name, reviewtitle, rating, content) VALUES (?, ?, ?, ?, ?, ?)";
        pool.query(query, [productid, email, name, reviewtitle, rating, content], (results, error) => {
            if (!results) {
                res.json(error);     
            } else {
                res.status(200).json(results);
            }
        })
    } catch(error) {
    console.log(error);
    res.status(200).json(error);
    }
}

module.exports = {
    addProductReviews, 
    getProductReviews
}
