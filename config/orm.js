var connection = require("../config/connection.js");

var orm = 
{
    selectAll: function(tableName, callback)
    {
        var queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString, function(err, result)
        {
            if(err) throw err;
            callback(result);
        });
    },

    insertOne: function(tableName, burger_name, devoured, callback)
    {
        var queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (" + burger_name + ", " + devoured + ");";

        connection.query(queryString, function(err, result)
        {
            if(err) throw err;
            callback(result);
        })
    },

    updateOne: function(tableName, burger_name, devoured, callback)
    {
        var queryString = "UPDATE " + tableName + "SET devoured = " + devoured + " WHERE burger_name = " + burger_name + ");";

        connection.query(queryString, function(err, result)
        {
            if(err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;