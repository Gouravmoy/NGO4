var databaseURI = "localhost:27017/test";
var collections = ["ngodetails"];
var db = require("mongojs").connect(databaseURI, collections);

module.exports = db;