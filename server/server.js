const express = require("express");
const app = express();
const port = 5001;

app.use(express.json());

app.get("/test", (req, res) => {
  res.send({
    login: "marikotoo",
    password: "0:37",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
