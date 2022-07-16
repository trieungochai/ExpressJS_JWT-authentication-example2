const express = require("express");
const app = express();

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

// app
app.get("/albums", (req, res) => {
  res.status(200).json({
    status: "Succeeded",
    data: albums,
  });
});

app.listen(PORT, () => {
  console.log(`Server is started at P ort ${PORT}`);
});
