var equifit = require('../controllers/equifit');
var home = require('../controllers/home');


module.exports.initialize = function(app) {
    // api routes going first
    app.get('/equifit/api/clients/:id/equifits', equifit.getEquifits);

    app.get('/equifit/api/clients/:id/equifits/:id', equifit.getEquifit);
    app.put('/equifit/api/clients/:id/equifits/:id', equifit.submitEquifit);

    app.get('/equifit/api/clients/:id/equifits/:id/documents', equifit.getDocuments);
    app.get('/equifit/api/clients/:id/equifits/:id/documents/:id', equifit.getDocument);
    app.post('/equifit/api/clients/:id/equifits/', equifit.addEquifit);

    app.get('/', home.index);
    app.get('/equifit', equifit.equifit);
    // match all others to make Single Page App Work
    app.get('/equifit/*', equifit.equifit);
};


