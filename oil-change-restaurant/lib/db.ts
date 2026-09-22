import Database from "better-sqlite3"

const db = new Database("oilflow.db")

db.pragma("journal_mode = WAL")

db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id TEXT PRIMARY KEY,
    service_id TEXT NOT NULL,
    service_name TEXT NOT NULL,
    restaurant TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    address TEXT NOT NULL,
    notes TEXT DEFAULT '',
    status TEXT NOT NULL DEFAULT 'scheduled',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS profile (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    restaurant TEXT NOT NULL,
    address TEXT NOT NULL,
    email_updates INTEGER NOT NULL DEFAULT 1,
    sms_updates INTEGER NOT NULL DEFAULT 1
  );
`)

export default db