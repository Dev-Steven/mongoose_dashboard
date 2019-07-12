const mongoose = require('mongoose'), 
Bear = mongoose.model('Bear')

module.exports = {

    index: function(req, res) {
        Bear.find({}, function(err, bears) {
            res.render('index', {all_bears: bears});
        })
    },

    details: function(req, res) {
        Bear.find({_id: req.params.id}, function(err, bears) {
            res.render('details', {the_bear: bears});
        })
    }, 

    add_new: function(res, res) {
        res.render('create');
    },

    creating: function(req, res) {

        console.log("POST DATA", req.body);
        // This is where we would add the user from req.body to the database.
        var bear = new Bear({name: req.body.name, species: req.body.species, weight: req.body.weight});
        bear.save(function(err) {
            if(err) {
                console.log('something went wrong');
                // for(var key in err.errors){
                //     req.flash('registration', err.errors[key].message);
                // }
                res.redirect('/bears/new');
            } else {
                console.log('successfully added a bear');
                res.redirect('/');
            }
        })
    },

    edit: function(req, res) {
        Bear.find({_id: req.params.id}, function(err, bears) {
            res.render('edit', {the_bear: bears})
        })
    },

    editing: function(req, res) {

        Bear.findOne({_id: req.params.id}, function(err, bears) {
            bears.name = req.body.name;
            bears.species = req.body.species;
            bears.weight = req.body.weight;
            bears.save(function(err) {
                console.log("successful update")
            })
        })
        res.redirect('/')
    },

    delete: function(req, res) {

        console.log(req.params.id)
        Bear.remove({_id: req.params.id}, function(err) {
        })
        res.redirect('/')

    }

};