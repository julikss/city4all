import { pool } from "../db/pool.js";

export const UserModel = {
  async findByEmail(email) {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    return result.rows[0];
  },

  async create({ fullName, email, passwordHash, accountType }) {
    const result = await pool.query(
      `INSERT INTO users (full_name, email, password_hash, account_type)
       VALUES ($1, $2, $3, $4)
       RETURNING id, full_name, email, account_type, created_at`,
      [fullName, email, passwordHash, accountType]
    );
    return result.rows[0];
  },

  async findAll() {
    const result = await pool.query(
      "SELECT id, full_name, email, account_type, created_at FROM users ORDER BY id ASC"
    );
    return result.rows;
  }
};
