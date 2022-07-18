require("dotenv").config();
const express = require("express");
const app = express();
const JWT = require("jsonwebtoken");
const verifyToken = require("./middleware/auth");

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Database
const albums = [
  {
    id: 1,
    title: "Electric Ladyland",
    artist: "The Jimi Hendrix Experience",
  },
  {
    id: 2,
    title: "In Through the Out Door",
    artist: "Led Zeppelin",
  },
  {
    id: 3,
    title: "Some Girls",
    artist: "The Rolling Stone",
  },
];

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

// app
app.post("/login", (req, res) => {
  const { name } = req.body;
  const user = users.find((user) => user.name === name);
  if (!user) return res.sendStatus(401);

  const accessToken = JWT.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15s",
  });

  return res.status(200).json({ accessToken });
});

app.get("/albums", verifyToken, (req, res) => {
  res.status(200).json({
    status: "Succeeded",
    data: albums,
  });
});

app.listen(PORT, () => {
  console.log(`Server is started at P ort ${PORT}`);
});
