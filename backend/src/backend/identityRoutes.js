const express = require("express");
const router = express.Router();
const identity = require("../identity");

router.post("/start-recovery", async (req, res) => {
  try {
    const { userId, biometricKeyHash } = req.body;
    const isValid = await identity.validateBiometric(userId, biometricKeyHash);

    if (!isValid) {
      return res.status(401).json({ error: "Biometric verification failed" });
    }

    const recoveryToken = await identity.startRecovery(userId);
    res.json({ recoveryToken });
  } catch (err) {
    res.status(500).json({ error: "Failed to start recovery" });
  }
});

router.post("/verify-recovery", async (req, res) => {
  try {
    const { token } = req.body;
    const userId = await identity.verifyRecoveryToken(token);

    if (!userId) {
      return res.status(400).json({ error: "Invalid recovery token" });
    }

    const sessionToken = identity.createSession(userId);
    res.json({ userId, sessionToken });
  } catch (err) {
    res.status(500).json({ error: "Failed to verify recovery token" });
  }
});

module.exports = router;
