// api/_lib/db.js
// TiDB (MySQL-compatible) connection pool.
// The pool is cached on the Node.js global object so that warm serverless
// invocations reuse it instead of opening a new connection every request.

const mysql = require('mysql2/promise');

function getPool() {
  if (!global.__tidbPool) {
    global.__tidbPool = mysql.createPool({
      host: process.env.TIDB_HOST,
      port: Number(process.env.TIDB_PORT) || 4000,
      user: process.env.TIDB_USER,
      password: process.env.TIDB_PASSWORD,
      database: process.env.TIDB_DATABASE,
      // TiDB Cloud requires TLS. Its certificate is issued by a publicly
      // trusted CA, so the default trust store works fine.
      ssl: { minVersion: 'TLSv1.2', rejectUnauthorized: true },
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    });
  }
  return global.__tidbPool;
}

module.exports = { getPool };
