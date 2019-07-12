const mongoose = require('mongoose');

var BearSchema = new mongoose.Schema({
    name: String,
    species: String,
    weight: Number,

},{timestamps:true});
mongoose.model('Bear', BearSchema);