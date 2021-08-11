const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv").config();

const app = express();

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  debug: false,
});

module.exports = pool;
