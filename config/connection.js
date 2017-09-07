// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
  // port: 3306,
  // host: "localhost",
  // user: "root",
  // password: "Now1CanTalk",
  // database: "burger_db"
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    port: process.env.PORT || 3306,
    host: "dyud5fa2qycz1o3v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "g24qebkqze3zcx1y",
    password: "jn2dup5eoyi01ihn",
    database: "burger_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
