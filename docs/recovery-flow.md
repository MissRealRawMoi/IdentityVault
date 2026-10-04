# Account Recovery Flow

## User Steps

1. Open IdentityVault.
2. Verify identity using fingerprint/biometric + legal name.
3. See list of recoverable accounts (TikTok, X, Meta, Google, etc.).
4. Select accounts to recover.
5. Complete provider-specific recovery (OAuth, confirmation, etc.).
6. Confirm restored access and update contact info if needed.

## Backend Steps

1. Receive verification request.
2. Validate biometric hash + legal name.
3. Create `recovery_token` with short expiry.
4. For each selected provider:
   - Start OAuth flow.
   - Confirm ownership.
   - Trigger account recovery/reset.
5. Log recovery actions and update `linked_accounts`.
