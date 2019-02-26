var mysql = require('mysql');

var con = mysql.createConnection({
  host: "aws-test.cm7d5lgfchgt.us-east-1.rds.amazonaws.com",
  port: "3306"
  user: "awstest",
  password: "awstest.2019"
  database: "awstest"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  con.query("CREATE DATABASE awstest", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
   var sql = "INSERT INTO customers (name, address) VALUES ('Company', 'Addr')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  con.query("SELECT * FROM Company", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  var sql = "DELETE FROM company WHERE address = 'Addr2'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
