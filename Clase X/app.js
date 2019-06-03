var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person',personSchema);

var john = Person({
    firstname: 'PEZ',
    lastname: 'VELA DE NOCHE',
    address: 'Manzanillo'
})
//check if saved
john.save(function(err){
    if(err) throw err;

    console.log('person saved!');
});

Person.find({}, function(err,users){
    if(err) throw err;

    //object of all users
    console.log(users);
});