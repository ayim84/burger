var connection = require("../config/connection.js");

var orm = 
{
    selectAll: function(tableName, callback)
    {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, function(err, result)
        {
            if(err) throw err;
            callback(result);
        });
    },

    insertOne: function(tableName, columns, values, callback)
    {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [tableName, columns, values], function(err, result)
        {
            if(err) throw err;
            callback(result);
        });
    },

    updateOne: function(tableName, updateCol, updateVal, searchCol, searchVal, callback)
    {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

        connection.query(queryString, [tableName, updateCol, updateVal, searchCol, searchVal], function(err, result)
        {
            if(err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;