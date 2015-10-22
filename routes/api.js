var express = require('express');
var router = express.Router();
var daoMongoose = require('../daoMongoose');

//Used for routes that must be authenticated.
function isAuthenticated(req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods

    if (req.isAuthenticated()) {
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    return res.redirect('/#login');
}

//Register the authentication middleware
router.use('/ngos', isAuthenticated);

router.route('/ngos')

    .get(function (req, res) {
        daoMongoose.findAllNGOs(function (list) {
            //this is more accurate
            /*for (var key in list) {
             if (list.hasOwnProperty(key)) {
             var ngo = list[key];
             console.log(ngo.name);
             }
             }*/
            return res.send(list);
        });

    });

router.route('/ngos/:id')

    .get(function (req, res) {
        daoMongoose.findAllNGObyId(req.params.id, function (ngoDetail) {
            return res.send(ngoDetail);
        });
    });


router.route('/ngos/query/state/:state')

    .get(function (req, res) {
        daoMongoose.findNGOsByState(req.params.state, function (ngoDetail) {
            return res.send(ngoDetail);
        });
    });

router.route('/ngos/query/state/:state/dist/:dist')

    .get(function (req, res) {
        daoMongoose.findNGOsByStateAndDist(req.params.state, req.params.dist, function (ngoDetail) {
            return res.send(ngoDetail);
        });
    });

router.route('/ngos/query/state/pin/:pin')

    .get(function (req, res) {
        daoMongoose.findNGOsByPin(req.params.pin, function (ngoDetail) {
            return res.send(ngoDetail);
        });
    });

router.route('/ngos/query/state/dist/:state')

    .get(function (req, res) {
        daoMongoose.findDistOfState(req.params.state, function (ngoDetail) {
            return res.send(ngoDetail);
        });
    });

router.route('/ngos/query/org/:org')

    .get(function (req, res) {
        daoMongoose.findNGOsByAffliation(req.params.org, function (ngoDetail) {
            return res.send(ngoDetail);
        });
    });

router.route('/ngos/query/areaOfInst/:intrest')

    .get(function (req, res) {
        daoMongoose.findNGOsByArOfInst(req.params.intrest, function (ngoDetail) {
            return res.send(ngoDetail);
        });
    });

router.route('/ngos/query/name/:name')

    .get(function (req, res) {
        daoMongoose.findNGOsByName(req.params.name, function (ngoDetail) {
            return res.send(ngoDetail);
        });
    });

module.exports = router;
