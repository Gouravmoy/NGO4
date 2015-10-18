var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/test";
var collectionName;

var findAllNGOs;
var findNGOsByState;
var findNGOsByDist;
var findNGOsByAffliation;

collectionName = "ngodetails";

findAllNGOs = function (db, callback) {
    var cursor = db.collection(collectionName).find();
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};
findNGOsByState = function (db, state, callback) {
    var cursor = db.collection(collectionName).find({"address.state": state});
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};

findNGOsByDist = function (db, dist, callback) {
    var cursor = db.collection(collectionName).find({"address.dist": dist});
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};


findNGOsByAffliation = function (db, affliation, callback) {
    var cursor = db.collection(collectionName).find({"orgType": affliation});
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};


findNGOsByArOfInst = function (db, interest, callback) {
    var cursor = db.collection(collectionName).find({
        "areaOfFocus.areasOfIntrest": {
            $regex: /.*Pollution.*/,
            $options: "$i"
        }
    });
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};


MongoClient.connect(url, function (err, db) {
    var interest = "Pollution";
    assert.equal(null, err);
    console.log("Connected to MongoDB Server Successfully!!")
    /*findAllNGOs(db, function () {
     db.close();
     });*/
    findNGOsByArOfInst(db, interest, function () {
        db.close();
    });
});
