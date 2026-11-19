const path = require("path");
const { DatabaseSync } = require("node:sqlite");

const dbPath = path.join(__dirname, "identityvault.db");
const db = new DatabaseSync(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    biometric_key_hash TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS recovery_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    token TEXT UNIQUE NOT NULL,
    created_at TEXT NOT NULL
  );
`);

async function query(sql, params = []) {
  const statement = db.prepare(sql);
  const trimmed = sql.trim().toUpperCase();

  if (trimmed.startsWith("SELECT")) {
    return statement.all(...params);
  }

  const info = statement.run(...params);
  return info;
}

module.exports = {
  db,
  query
};
