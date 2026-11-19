const express = require("express");
const authRoutes = require("./routes/authRoutes");
const identityRoutes = require("./identityRoutes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "IdentityVault" });
});

app.use("/auth", authRoutes);
app.use("/identity", identityRoutes);

module.exports = app;
