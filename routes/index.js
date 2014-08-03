
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


/*
 * GET equifit page.
 */

exports.equifit = function(req, res){
  res.render('equifit', { title: 'Equifit' });
};