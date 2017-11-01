var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database:'baobei'
  
})
/* GET home page. */
router.post('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	
	var n=req.body.aa
	console.log(n)
  connection.query('SELECT * FROM shousuo WHERE name LIKE "%'+n+'%"',function(err, rows, fields) {
		 
  res.send(rows)
  console.log(rows)
  })
  });
module.exports = router;
