const express = require("express");
const app = express();
const identityRoutes = require("./identityRoutes");

app.use(express.json());

// IdentityVault API routes
app.use("/identity", identityRoutes);

app.listen(3000, () => {
    console.log("IdentityVault backend running on port 3000");
});
