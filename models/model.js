var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var NGODetailsSchema = new Schema({
    name: String,
    abbr: String,
    contactPerson: String,
    address: {
        address1stLine: String,
        dist: String,
        state: String,
        pin: String
    },
    contact: {
        phoneNo: String,
        fax: String,
        email: String,
        website: String
    },
    areaOfFocus: {
        areasOfIntrest: String,
        activitiesWrtEnvAndEdu: String,
        otherActivities: String,
        publications: String
    },
    orgType: String
});

var NGODetails = mongoose.model("NGODetails", NGODetailsSchema);
module.exports = NGODetails;
