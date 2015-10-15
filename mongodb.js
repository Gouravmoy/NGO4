var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url="mongodb://localhost:27017/test";

var findNGOs = function(db,callback){
  var cursor = db.collection('ngodetails').find().sort({"address.pin":1});
    cursor.each(function(err, doc){
    assert.equal(err,null);
        if(doc!=null)
        {
            console.dir(doc);
        }else{
            callback();
        }
    });
};

MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    console.log("Connected to MongoDB Server Successfully!!")
    findNGOs(db,function(){
        db.close();
    });
});
