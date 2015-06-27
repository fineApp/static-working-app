var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('fineApp', ['fineApp']);
var bodyParser = require('body-parser');
// app.get('/', function(req, res){
// 	res.send('Hellow Server JS');
// });
app.use(express.static(__dirname+ "/public"));
app.use(bodyParser.json());
app.get('/fineApp', function (req, res){
	console.log('Recd Get Request');
	// person1 ={
 //    	name: "neha",
 //    	email: "email@gmail.com",
 //    	number: "5845934"
 //    };
 //    person2 ={
 //    	name: "dsds",
 //    	email: "sds@gmail.com",
 //    	number: "564634634"
 //    };
	// var contactlist = [person1, person2];
	// res.json(contactlist);
	db.contactlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/fineApp', function(req, res){
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/fineApp/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

app.get('/fineApp/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});	
});

app.put('/fineApp/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)}, 
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}}, 
		new: true} , function(err, doc){
			res.json(doc);
	});
});

app.listen(3000);
console.log('Runnnnnnnnnnning');
