# IdentityVault – System Architecture

## Components

- Mobile App (React Native)
  - Captures fingerprint/biometric data via device APIs
  - Collects legal name and optional extra identity info
  - Shows recovery dashboard and linked accounts

- Backend API (Node.js)
  - Verifies identity (biometric hash + legal name)
  - Issues temporary recovery tokens
  - Handles OAuth flows with providers (TikTok, X, Meta, Google, etc.)
  - Manages linked accounts and recovery sessions

- Database (SQL)
  - `users` – core identity records
  - `linked_accounts` – external accounts tied to a user
  - `recovery_tokens` – short‑lived tokens for recovery operations

## High-Level Flow

1. User verifies identity (biometric + name).
2. Backend confirms match and issues a recovery token.
3. User selects accounts to recover.
4. IdentityVault uses provider APIs/OAuth to restore access.
5. Device accounts and backup emails/phones are linked to the verified identity.
