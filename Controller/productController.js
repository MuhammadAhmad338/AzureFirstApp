const { pool } = require("./controller");

const allProductsAvailable = async (req, res) => {
  try {
    const query = "SELECT * FROM PRODUCTS";
    pool.query(query, (results, error) => {
      if (!results) {
        res.status(500).json(error);
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const productsByCategory = async (req, res) => {
  const category = req.category;
  try {
    const query = "SELECT * FROM PRODUCTS WHERE category = ?";
    pool.query(query, [category], (results, error) => {
      if (!results) {
        res.status(500).json(error);
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { allProductsAvailable, productsByCategory };
