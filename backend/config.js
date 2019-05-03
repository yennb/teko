var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'teko-test'
});

try {
    connection.connect();
} catch(e) {
    console.log('Database Connection failed:' + e);
}

module.exports = connection;