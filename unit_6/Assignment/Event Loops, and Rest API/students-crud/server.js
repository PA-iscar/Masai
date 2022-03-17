const fs = require("fs");
const express = require("express");
const filename = "./users.json";
const users = require(filename);

const PORT = 8000;

let app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  fs.writeFileSync(filename, JSON.stringify([...users, req.body], null, 2));
  res.json(req.body);
});

app.patch("/users", (req, res) => {
  const payload = users.filter((el) => el.id === Number(req.body.id))[0];

  for (const key in req.body) {
    if (key !== "id") payload[key] = req.body[key];
  }

  fs.writeFileSync(filename, JSON.stringify([...users], null, 2));
  res.json(req.body);
});

app.delete("/users", (req, res) => {
  const payload = users.filter((el) => el.id !== Number(req.body.id));
  fs.writeFileSync(filename, JSON.stringify([...payload], null, 2));
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
