// Set up MySQL connection.
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3000,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burger_db'
});

// Make connection.
connection.connect(function(err){
    if(err){
    console.error('error connection: ' + err.stack)
    return;
}
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;