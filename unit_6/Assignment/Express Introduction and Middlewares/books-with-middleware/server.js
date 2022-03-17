const fs = require("fs");
const express = require("express");
const filename = "./books.json";
const books = require(filename);

const PORT = 8000;

let app = express();

function logger(req, res, next) {
  res.body = { api_requested_by: "Abhishek" };
  next();
}

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.body = { ...res.body, books };
  res.json(res.body);
});

app.post("/books", (req, res) => {
  fs.writeFileSync(filename, JSON.stringify([...books, req.body], null, 2));
  res.json({ ...res.body, book: { ...req.body } });
});

app.get("/books/:id", (req, res) => {
  res.body = {
    ...res.body,
    book: { ...books.filter((el) => el.id === Number(req.params.id))[0] },
  };
  res.json(res.body);
});

app.patch("/books/:id", (req, res) => {
  const payload = books.filter((el) => el.id === Number(req.params.id))[0];

  for (const key in req.body) {
    payload[key] = req.body[key];
  }

  fs.writeFileSync(filename, JSON.stringify([...books], null, 2));
  res.json({ ...res.body });
});

app.delete("/books/:id", (req, res) => {
  const payload = books.filter((el) => el.id !== Number(req.params.id));
  fs.writeFileSync(filename, JSON.stringify([...payload], null, 2));
  res.json({ ...res.body });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
