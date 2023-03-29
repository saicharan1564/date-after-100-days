const express = require("express");

let addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let dateAfter100 = addDays(date, 100);
  response.send(
    `${dateAfter100.getDate()}/${
      dateAfter100.getMonth() + 1
    }/${dateAfter100.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
