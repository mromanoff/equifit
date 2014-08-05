var equifit = require('../controllers/equifit');
var home = require('../controllers/home');


module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/equifit', equifit.equifit);
    //app.get('/equifit/api/members/999/equifits/', api.equifits);
};


