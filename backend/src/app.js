const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "IdentityVault" });
});

app.use("/auth", authRoutes);

module.exports = app;
