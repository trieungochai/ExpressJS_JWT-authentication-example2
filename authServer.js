require("dotenv").config();
const express = require("express");
const app = express();
const JWT = require("jsonwebtoken");

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Database
const users = [
  {
    id: 1,
    name: "Kai",
  },
  {
    id: 2,
    name: "Samu",
  },
];

// App
app.post("/login", (req, res) => {
  const { name } = req.body;
  const user = users.find((user) => user.name === name);
  if (!user) return res.sendStatus(401);

  const accessToken = JWT.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15s",
  });

  return res.status(200).json({ accessToken });
});

app.listen(PORT, () => {
  console.log(`Server is started at Port ${PORT}`);
});
