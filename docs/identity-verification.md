# Identity Verification Logic

## Biometric Handling

- Raw biometric data is never stored.
- Device generates a biometric template.
- IdentityVault stores:
  - `fingerprint_hash = SHA256(fingerprint_template)`
  - `iris_hash = SHA256(iris_template)` (optional)

## Verification Request

Input:
- `legal_name`
- `fingerprint_hash` (or other biometric hash)

Process:
- Lookup user by `legal_name` and `fingerprint_hash`.
- If match found → issue temporary recovery token.
- If no match → return "identity not found" or prompt enrollment.

## Enrollment

When a new user is created:
- Capture biometric template.
- Hash and store in `users` table.
- Optionally link initial accounts and backup contact info.
