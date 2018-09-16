var orm = require("../config/orm.js");

var burger =
{
    selectAll: function(callback)
    {
        orm.selectAll("burgers", function(result)
        {
            callback(result);
        });
    },

    insertOne: function(columns, values, callback)
    {
        orm.insertOne("burgers", columns, values, function(result)
        {
            callback(result);
        });
    },

    updateOne: function(updateCol, updateVal, searchCol, searchVal, callback)
    {
        orm.updateOne("burgers", updateCol, updateVal, searchCol, searchVal, function(result)
        {
            callback(result);
        });
    }
}

module.exports = burger;