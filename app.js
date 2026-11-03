const express = require("express");
const app = express();
const route = require("./routes/studentRoute");
app.use(express.json());

app.use("/api/students", route);
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "server is running",
  });
});

module.exports = app;
