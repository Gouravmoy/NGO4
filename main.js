var daoMongoose = require('./daoMongoose');
/*var state = "TAMIL NADU";
 var dist = "Sivaganga";*/
daoMongoose.findAllNGOs(function (list) {

    /*for(dist in list)
     {
     console.log(list[dist].name)
     }*/

    //this is more accurate
    for (var key in list) {
        if (list.hasOwnProperty(key)) {
            var ngo = list[key];
            console.log(ngo.name);
        }
    }
});

