var express = require('express');
var router = express.Router();

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
        res.send({message: 'List of all the NGOs!!'});
    });

router.route('/ngos/:id')

    .get(function (req, res) {
        return res.send({message: 'Get Details of an existing NGO - > ' + req.param.id});
    });


module.exports = router;
