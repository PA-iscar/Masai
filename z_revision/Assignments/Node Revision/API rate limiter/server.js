const express = require("express");

const PORT = 8000;

let app = express();
let tom = {};

app.use(express.json());

app.get("/", (req, res) => {
  var ip = req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  if (!tom[ip]) {
    tom[ip] = { count: 0, time: Date.now() };
  }

  if ((Date.now() - tom[ip].time) / 1000 > 60) {
    tom[ip].count = 1;
    tom[ip].time = Date.now();
  } else {
    tom[ip].count++;
    if (tom[ip].count > 10) {
      res.json("Too many requests, Request Rejected");
    }
  }

  res.json(`Received Request from ${ip}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
