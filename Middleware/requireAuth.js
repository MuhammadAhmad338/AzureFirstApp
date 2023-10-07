const jwt = require("jsonwebtoken");
const pool = require("./dbConnect");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization Required!" });
  }
  const token = authorization;
  try {
    const query = "SELECT * FROM users WHERE email = ?";
    const { email } = jwt.verify(token, process.env.SECRET);
    pool.query(query, [email], async (results, error) => {
        req.user = results;
        next();
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
