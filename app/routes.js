var equifit = require('../controllers/equifit');
var home = require('../controllers/home');
var client = require('../controllers/client');


module.exports.initialize = function(app) {
    // api routes going first
    app.get('/equifit/api/clients/:id/equifits', equifit.getEquifits);
    app.post('/equifit/api/clients/:id/equifits/', equifit.createEquifit);
    app.get('/equifit/api/clients/:id/equifits/:id', equifit.getEquifit);
    app.put('/equifit/api/clients/:id/equifits/:id', equifit.updateEquifit);


    app.get('/equifit/api/clients/:id/equifits/:id/documents', equifit.getDocuments);
    app.post('/equifit/api/clients/:id/equifits/:id/documents', equifit.createDocument);
    app.get('/equifit/api/clients/:id/equifits/:id/documents/:id', equifit.getDocument);
    app.put('/equifit/api/clients/:id/equifits/:id/documents/:id', equifit.updateDocument);

    app.get('/', home.index);
    app.get('/clients/client*', client.index);
    app.get('/equifit/*', equifit.equifit);
};


