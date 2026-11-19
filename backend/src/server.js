const express = require("express");
const app = express();
const identityRoutes = require("./identityRoutes");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "IdentityVault" });
});

// IdentityVault API routes
app.use("/identity", identityRoutes);

app.listen(PORT, () => {
  console.log(`IdentityVault backend running on port ${PORT}`);
});
