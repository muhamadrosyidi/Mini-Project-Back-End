    var express = require('express');
    var app = express();
    
    var service = require ('./controller/controller');
    var database = require ('./storage/storage');
    
    app.use(express.json());
    
    // ****************************************************************** ACCOUNT ************************************************************************ //
    // get list of its account
    app.get('/accounts', function (req, res){
        service.getAccounts(database.connection, database.listAccount, function(err, results){
            if (err) {res.status(400)} else {
                res.send(results);
                console.log(results);
            }
        });
    })
    
    // // create account --> name; pass; address; join_date; phone_number
    app.post('/signup' , function (req, res) {
        let post = {
            nama: req.body.nama,
            pass : req.body.pass,
            address : req.body.address,
            joinDate : req.body.joinDate,
            phoneNumber : req.body.phoneNumber
        }
        
        service.createAccount(database.connection, database.createAccount, post, function(err, results){
            if (err) {res.status(400)} else {
                res.send(results);
                console.log(results);
                console.log('Account has been registered..')
            }
        })
    });
    
    // delete account
    app.delete('/accounts/delete/:id', function(req, res) {
        let id = req.params.id;
        
        service.deleteAccount(database.connection, database.deleteAccount, id, function(err, results){
            if(err) {res.status(400)} else {
                res.send(results);
                console.log(results);
                console.log('Account has been deleted..')
            }
        })    
    });
    
    // update account
    app.put('/accounts/update/:id', function(req, res){    
        let update = {
            nama: req.body.nama,
            pass : req.body.pass,
            address : req.body.address,
            joinDate : req.body.joinDate,
            phoneNumber : req.body.phoneNumber
        }
    
        let cek = [update, req.params.id];
    
        service.updateAccount(database.connection, database.deleteAccount, cek, function(err, results){
            if(err) {res.status(400)} else {
                res.send(results);
                console.log(results);
                console.log('Account has been updated..')
            }
        })  
    })
    
    // // ******************************************************************* PRODUCT *********************************************************************** //
    // get list of its products
    app.get('/accounts/:id_account/products', function (req, res){
        let user = req.params; 
        
        service.getProducts(database.connection, database.listProducts, user, function(err, results){
            if (err) {res.status(400)} else {
                res.send(results);
                console.log(results);
            }
        });
    })
    
    // add products --> id; product; quantity; price
    app.post('/accounts/:id_account/add', (req, res) => {
        
        let post = {
            id_account: req.params.id_account,
            product: req.body.product,
            qty : req.body.qty,
            price : req.body.price,
        }
        
        service.addProducts(database.connection, database.addProducts, post, function(err, results){
            if(err) {res.status(400)} else {
                res.send(results);
                console.log(results);
            }
        })
    });
    
    // delete products
    app.delete('/accounts/:id_account/delete/:id', function(req, res) {
        let idProduct = req.params.id;    
        
        service.deleteProducts(database.connection, database.deleteProducts, idProduct, function(err, results){
            if(err) {res.status(400)} else {
                res.send(results);
                console.log(results);
            }
        })
    });
    
    // update products
    app.put('/accounts/:id_account/update/:id', function(req, res){    
        let update = {
            product : req.body.product,
            qty : req.body.qty,
            price : req.body.price
        }
    
        let data = [update, req.params.id_account, req.params.id];
    
        service.updateProducts(database.connection, database.updateProducts, data, function(err, results){
            if(err) {res.status(400)} else {
                res.send(results);
                console.log(results);
            }
        })
    })
    
    // Router
    app.listen(4000, function() {
        console.log('Running a server...');
        service.router(database.connection);
    });