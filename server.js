var express = require('express');
var app = express();
var path = require('path');

/*var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://username:password@cluster0-shard-00-00-sx3i1.mongodb.net:27017,cluster0-shard-00-01-sx3i1.mongodb.net:27017,cluster0-shard-00-02-sx3i1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
  db.close();
});*/

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});