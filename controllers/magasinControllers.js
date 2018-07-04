var Magasin = require ("../models/Magasin");
var mongoose = require('mongoose');

var magasinController = {};

// Lister les magasins
magasinController.list = function(req, res) {
    Magasin.find({}).exec(function(err, magasin){
        if(err){
            console.log('Error : ', err);
        }else{
            console.log("->",magasin);
            res.render("../views/magasin/index",{magasin:magasin} );
        } 
    });
  };

// Créer un magasin
  magasinController.create = function(req, res){
    res.render("../views/magasin/ajout");
  }; 
  
// Enregistrer le magasin créé
  
  magasinController.save = function(req, res){
    var magasin = new Magasin(req.body);
     
    magasin.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/magasin/ajout");
        } else{
            console.log("creation produit OK");
            res.redirect("/magasins" );
        } 
    });
  };


  //export du module
module.exports = magasinController;