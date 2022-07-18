require("dotenv").config();
const JWT = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    const decoded = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("token:", token);
    console.log("decoded:", decoded);

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(403);
  }
};

module.exports = verifyToken;
