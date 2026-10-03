exports.verify = async (fingerprintToken, name) => {
  // In real apps, fingerprintToken comes from OS biometric API
  if (!fingerprintToken || !name) return false;

  // Placeholder logic
  return true;
};
