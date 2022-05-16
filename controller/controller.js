// ************************************************************ SERVICES ACCOUNTS ****************************************************************

// Logic to Get list of Accounts
function getAccounts(database, sql, callback){
    database.query(sql, function (err, results){
        if (err) throw err;
        return callback (err, results);
    })
}

// Logic to to Create an Account
function createAccount(database, sql, post, callback){    
    database.query(sql, post, function (err, results) {
        if (err) throw err
        return callback (err, results);
    })
}

// Logic to to Delete an Account
function deleteAccount(database, sql, id, callback){
    database.query(sql, id, function (err, results) {
        if (err) throw err
        return callback(err, results);
    })
}

// Logic to to Update an Account
function updateAccount(database, sql, id, callback){
    database.query(sql, id, function (err, results){
        if (err) throw err
        return callback(err, results);
    })
}


// ************************************************************ SERVICES PRODUCTS ****************************************************************

// Logic to Get list of Products
function getProducts(database, sql, idAccount, callback){   
    database.query(sql, function (err, results){
        if (err) throw err;
        return callback (err, results);
    })
}

// Logic to Add Products
function addProducts(database, sql, callback){
    database.query(sql, post, (err, results) => {
        if (err) throw err
        return callback(err, results);
    })
}

// Logic to Delete Products
function deleteProducts(database, sql, idProduct, callback){
    database.query(sql, idProduct, function (err, results) {
        if (err) throw err
        return callback(err, results);
    })
}

// Logic to Update Products
function updateProducts(database, sql, idProduct, callback){
    database.query(sql, idProduct, function (err, results){
        if (err) throw err
        return callback(err, results);
    })
}

// Logic to Router
function router(database){
    database.connect(function(err){
        if (err) throw err;
        console.log('Data Base has been connected now !...');
    })
}

module.exports = { getAccounts, createAccount, deleteAccount, updateAccount, 
    getProducts, addProducts, deleteProducts, updateProducts,
    router };
