const mysql = require('mysql');
const dotenv = require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '172.18.0.1',
  port: '3306',
  user: 'patientsuser',
  password: 'patients',
  database: 'patientsdb',
  debug: false,
});

module.exports = pool;
