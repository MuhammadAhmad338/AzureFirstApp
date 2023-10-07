const pool = require("../Middleware/dbConnect");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (email) => {
  return jwt.sign({ email }, process.env.SECRET, {
    expiresIn: 60 * 60,
  });
};

const register = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  const hashedPassword = bcrypt.hashSync(password, salt);
  const data = { firstName, lastName, email, password: hashedPassword };
  const query = "SELECT * FROM users WHERE email = ?";
  pool.query(query, [email], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Some error occured!" });
      return;
    }
    const user = results[0];
    if (user) {
      res.json({ status: "Email is Already Registered!" });
    } else {
      const query =
        "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
      pool.query(
        query,
        [data.firstName, data.lastName, data.email, data.password],
        (error, results) => {
          if (!results) {
            res.json({ status: error });
          } else {
            const token = createToken(email);
            res.json({success: true, token });
          }
        }
      );
    }
  });
};

const signin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = "SELECT * FROM users WHERE email = ?";

  pool.query(query, [email], async (error, results) => {
    if (error) {
      res.status(500).json({ status: "Error Signing In" });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: "Invalid Credentials" });
      return;
    }
    const user = results[0];
    const userSigned = await bcrypt.compare(password, user.password);
    if (userSigned) {
      const token = createToken(email);
      res.json({success: true, token });
    } else {
      res.json({ status: "User is not SignedIn and check your Credentials" });
    }
  });
};

const allUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM USERS";
    pool.query(query, (error, results) => {
      if (!results[0]) {
        res.json({ status: error });
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { register, signin, allUsers, pool };
