var express = require('express');
var router  = express.Router();
var burger = require('../models/burger.js')

router.get('/', function(req, res) {
    burger.all(function(data){
        var hbsObject = {
            burgers:data
            
        };

        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/', function(req, res){
    burger.create(req.body.name, function(){
        res.redirect('/');
    });
});
router.put('/:id', function(req, res){
    var burgerID = 'id= '+ req.params.id;
    console.log('condition Burger ID: ', burgerID);

    burger.update(burgerID, function(){
        res.redirect('/');
    });
});

module.exports = router;