const express = require("express");
const millisToTime = require("./utils/timeConverter");

const PORT = 8000;

let app = express();
let tom = {};

app.use(express.json());

app.get("/", (req, res) => {
  var ip = req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  let response = "";

  if (!tom[ip]) {
    tom[ip] = { count: 0, time: Date.now() };
  }

  if ((Date.now() - tom[ip].time) / 1000 > 60) {
    tom[ip].count = 1;
    tom[ip].time = Date.now();
    response = "";
  } else {
    tom[ip].count++;
    if (tom[ip].count > 10) {
      response = `Too many requests, Request Rejected, Please wait for ${millisToTime(
        60000 - (Date.now() - tom[ip].time)
      )}`;
      //   res.json(
      //     `Too many requests, Request Rejected, Please wait for ${millisToTime(
      //       Date.now() - tom[ip].time
      //     )}`
      //   );
    }
  }

  res.json(
    `${
      response
        ? response
        : `Received Request from ${ip}, ${
            Date.now() - tom[ip].time === 0
              ? "First Request"
              : `Requested after: ${millisToTime(Date.now() - tom[ip].time)}`
          }`
    }`
  );
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
