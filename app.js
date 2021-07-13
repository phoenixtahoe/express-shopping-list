const express = require("express")
const app = express();
const iRoutes = require("./routes/items")

app.use(express.json());
app.use("/items", iRoutes);

app.use(function (req, res, next) {
  res.status(404).send("Not Found")
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app