const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/verify", authController.verifyIdentity);
router.post("/recover", authController.recoverAccounts);

module.exports = router;
