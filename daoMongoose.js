var NGODetails = require('./model');
module.exports = {
    findAllNGOs: function (callback) {
        NGODetails.find({}, function (err, ngoDetailList) {
            if (err)
                return console.error(err);
            callback(ngoDetailList);
        });
    },
    findNGOsByStateAndDist: function (state, dist, callback) {
        NGODetails.find({"address.state": state, "address.dist": dist}, function (err, ngoDetailList) {
            if (err)
                return console.error(err);
            callback(ngoDetailList);
        })
    },

    findDistOfState: function (state, callback) {
        var distList = [];
        NGODetails.find({"address.state": state}, function (err, ngoDetailList) {
            if (err)
                return console.error(err);
            for (var key in ngoDetailList) {
                if (ngoDetailList.hasOwnProperty(key)) {
                    var ngo = ngoDetailList[key];
                    distList.push(ngo.address.dist);
                }
            }
            callback(distList);

        })
    },
    findNGOsByAffliation: function (affliation, callback) {
        NGODetails.find({"orgType": affliation}, function (err, ngoDetailList) {
            if (err)
                return console.error(err);
            callback(ngoDetailList);
        })
    },
    findNGOsByArOfInst: function (interest, callback) {
        var regex = new RegExp(".*" + interest + ".*")
        NGODetails.find({
            "areaOfFocus.areasOfIntrest": {
                $regex: regex,
                $options: "$i"
            }
        }, function (err, ngoDetailList) {
            if (err)
                return console.error(err);
            callback(ngoDetailList);
        })
    },
    findNGOsByName: function (name, callback) {
        var regex = new RegExp(".*" + name + ".*");
        NGODetails.find({
            "name": {
                $regex: regex,
                $options: "$i"
            }
        }, function (err, ngoDetailList) {
            if (err)
                return console.error(err);
            callback(ngoDetailList);
        })
    },
    findNGOsByPin: function (pin, callback) {
        NGODetails.find({
            "address.pin": {
                $regex: regex,
                $options: "$x"
            }
        }, function (err, ngoDetailList) {
            if (err)
                return console.error(err);
            callback(ngoDetailList);
        })
    },
}
