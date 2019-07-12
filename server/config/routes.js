const bears = require('../controllers/bears');

module.exports = function(app) {

    // Displays all the bears
    app.get('/', function(req, res) {
        bears.index(req, res);
    })

    // Displays info about one bear
    app.get('/bears/:id', function(req, res) {
        bears.details(req, res);
    })

    // Displays a form for making a new bear
    app.get('/new', function(req, res) {
        bears.add_new(req, res);
    })

    // Grabs data from form
    app.post('/bears', function(req, res) {
        bears.creating(req, res);
    })

    // Show a form to edit mongoose 
    app.get('/edit/:id', function(req, res) {
        bears.edit(req, res);
    })

    // Should be action attribute for the from
    app.post('/change/:id', function(req, res) {
        bears.editing(req, res);
    })

    //Should delete the mongoose from teh database by ID
    app.get('/destroy/:id', function(req, res) {
        bears.delete(req, res);
    })
}