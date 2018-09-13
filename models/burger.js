var orm = require("../config/orm.js");

var burger =
{
    selectAll: function(callback)
    {
        orm.selectAll("burgers" , function(result)
        {
            callback(result);
        });
    },

    insertOne: function(burger_name, devoured, callback)
    {
        orm.insertOne("burgers", burger_name, devoured, function(result)
        {
            callback(result);
        });
    },

    updateOne: function(devoured, burger_name, callback)
    {
        orm.updateOne("burgers", burger_name, devoured, function(result)
        {
            callback(result);
        });
    }
}

module.exports = burger;