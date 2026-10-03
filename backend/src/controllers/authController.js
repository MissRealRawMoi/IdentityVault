const fingerprintService = require("../services/fingerprintService");
const oauthService = require("../services/oauthService");
const Token = require("../utils/token");

exports.verifyIdentity = async (req, res) => {
  const { fingerprintToken, name } = req.body;

  const verified = await fingerprintService.verify(fingerprintToken, name);
  if (!verified) return res.status(401).json({ error: "Identity mismatch" });

  const tempToken = Token.generate();
  res.json({ success: true, tempToken });
};

exports.recoverAccounts = async (req, res) => {
  const { tempToken } = req.body;

  if (!Token.validate(tempToken))
    return res.status(403).json({ error: "Invalid or expired token" });

  const accounts = await oauthService.recoverLinkedAccounts();
  res.json({ accounts });
};
