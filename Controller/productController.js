const { pool } = require("./controller");

const allProductsAvailable = async (req, res) => {
  try {
    const query = "SELECT * FROM products";
    pool.query(query, (results, error) => {
      if (!results) {
        res.json(error);
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const productsByCategory = async (req, res) => {
  const { category } = req.body;
  try {
    const query = "SELECT * FROM products WHERE category = ?";
    pool.query(query, [category], (results, error) => {
      if (!results) {
        res.json(error);
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const searchLiveProducts = async (req, res) => {
  const { title } = req.query;
  try {
    const query = "SELECT * FROM products WHERE title LIKE ?";
    pool.query(query, [`%${title}%`], (results, error) => {
      if (!results) {
        res.json(error);
      } else {
        res.statsu(200).json(results);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const searchProducts = (req, res) => {
  const { query } = req.query;
  try {
    const sqlQuery = "SELECT * FROM products WHERE title LIKE ?";
    pool.query(sqlQuery, [`%${query}%`], (results, error) => {
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

const filterByCategory = async (req, res) => {
  const { category } = req.query;
  try {
    const query = `SELECT * FROM products WHERE category = ?`;
    pool.query(query, [category], (results, error) => {
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

module.exports = {
  allProductsAvailable,
  productsByCategory,
  searchProducts,
  searchLiveProducts,
  filterByCategory,
};
