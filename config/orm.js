// Import MySQL connection.

// var connection = require('./');
var connection = require("../config/connection.js");
// SELECT

var orm = {
    selectAll: function(tableName, callback){
        var queryString = 'SELECT * From' + tableName + ';';
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        })
    },

    // INSERT
    insertOne: function(table, cols, vals, callback) {
        var queryString = 'INSERT INTO' + table +' ('+cols.toString()+') VALUES (?)';
        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            }
            callback(result);

        });
    },

    // UPDATE
    updateOne: function(table, condition, callback){
        var queryString ='UPDATE '+ table +' SET devoured = true WHERE ' +condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;

