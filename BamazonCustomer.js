var mysql = require ('mysql');
var prompt = require ('prompt');

var idToGet;
var numberToPurchase;
var priceHolder;
var stockHolder;

var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'e665',
	database: 'bamazon'  
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
});

connection.query('SELECT * FROM products', function (err, res) {
	if (err) throw err;
	console.log(res);
});

prompt.start();

prompt.get(['id', 'number'], function(err, result) {
	idToGet = result.id;
	numberToPurchase = result.number;
});

connection.query('SELECT * FROM products WHERE ItemID = '+idToGet, function (err, res) {
	if (err) throw err;
	priceHolder = res.Price;
	stockHolder = res.StockQuantity;
	if (res.StockQuantity < numberToPurchase) {
		console.log('Insufficiant Quantity.');
	} else {
		console.log('Your total is: ' + (priceHolder * numberToPurchase));
		connection.query('UPDATE products SET StockQuantity = ? WHERE ItemID = '+idToGet, [stockHolder - numberToPurchase], function(err, result) {
    		if (err) throw err;
    	}); 
	}
});

