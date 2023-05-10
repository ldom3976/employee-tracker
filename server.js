const inquirer = require("inquirer");

const mysql = require("mysql2");
const consoleTable = require("console.table");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "soph123",
        database: "employees_db",
    },
    console.log('connected')
);

