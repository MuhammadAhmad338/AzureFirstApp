const mysql2 = require("mysql2");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

dotenv.config();

const pool = mysql2.createPool({
  host: process.env.host,
  database: process.env.database,
  user: process.env.user,
  port: process.env.port,
  password: process.env.password,
});

const register =  async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync( saltRounds);

  const hashedPassword =  bcrypt.hashSync(password, salt);
  const data = { firstName, lastName, email, password: hashedPassword };
  const query = "SELECT * FROM USERS WHERE email = ?";
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
        "INSERT INTO USERS(firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
      pool.query(
        query,
        [data.firstName, data.lastName, data.email, data.password],
        (error, results) => {
          if (!results) {
            res.json({ status: error });
          } else {
            const token = jwt.sign({ email }, process.env.SECRET, {
              expiresIn: 60 * 60,
            });
            res.json({ token });
          }
        }
      );
    }
  });
};

const signin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = "SELECT * FROM USERS WHERE email = ?";

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
      const token = jwt.sign({ email }, process.env.SECRET, {
        expiresIn: 60 * 60,
      });
      res.json({ token });
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
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { register, signin, allUsers, pool };
