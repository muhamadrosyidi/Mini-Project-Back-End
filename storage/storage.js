var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'miniproject',
    user: 'root',
    password: 'K0mponen21K0mponen14'
});

// ************************************************************** QUERY ACCOUNT *****************************************************************

// Query to Create an Account
var createAccount = 'INSERT INTO account SET ?'

// Query to Get List of Accounts
var listAccount = 'SELECT * FROM account';

// Query to Delete Account
var deleteAccount = 'DELETE FROM account WHERE id= ?';

// Query to Update Account
var updateAccount = 'update product set ? where id = ?'


// ************************************************************** QUERY PRODUCT *****************************************************************

// Query to Get List of Produtcs
var listProducts = 'SELECT * FROM product WHERE id_account = ?';

// Query to Add Products
var addProducts = 'INSERT INTO product SET ?'

// Query to Delete Products
var deleteProducts = 'DELETE FROM product WHERE id= ?';

// Query to Update Products
var updateProducts = 'update product set ? where id_account = ? AND id = ?';

module.exports = { listAccount, createAccount, deleteAccount, updateAccount, 
    listProducts, addProducts, deleteProducts, updateProducts, 
    connection };