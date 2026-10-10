const crypto = require("crypto");
const db = require("./db");
const jwt = require("jsonwebtoken");

// Generate a secure recovery token
function generateRecoveryToken() {
    return crypto.randomBytes(32).toString("hex");
}

// Validate biometric hash (fingerprint/iris template)
async function validateBiometric(userId, biometricHash) {
    const result = await db.query(
        "SELECT biometric_hash FROM users WHERE id = ?",
        [userId]
    );

    if (!result || result.length === 0) return false;

    return result[0].biometric_hash === biometricHash;
}

// Begin recovery flow
async function startRecovery(userId) {
    const token = generateRecoveryToken();

    await db.query(
        "INSERT INTO recovery_tokens (user_id, token, created_at) VALUES (?, ?, NOW())",
        [userId, token]
    );

    return token;
}

// Verify recovery token
async function verifyRecoveryToken(token) {
    const result = await db.query(
        "SELECT user_id FROM recovery_tokens WHERE token = ?",
        [token]
    );

    if (!result || result.length === 0) return null;

    return result[0].user_id;
}

// Create secure session after recovery
function createSession(userId) {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
    );
}

module.exports = {
    validateBiometric,
    startRecovery,
    verifyRecoveryToken,
    createSession
};
