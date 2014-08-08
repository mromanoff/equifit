var equifit = require('../controllers/equifit');
var home = require('../controllers/home');


module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/equifit', equifit.equifit);

    app.get('/equifit/api/members/:id/equifits', equifit.getEquifits);
    app.get('/equifit/api/members/:id/equifits/:id', equifit.getEquifit);
    app.get('/equifit/api/members/:id/equifits/:id/documents', equifit.getDocuments);
    app.get('/equifit/api/members/:id/equifits/:id/documents/:id', equifit.getDocument);

    app.post('/equifit/api/members/:id/equifits/', equifit.addEquifit);
};


